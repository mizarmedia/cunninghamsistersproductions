/**
 * ScrollManager - Single source of truth for scroll behavior
 * Wraps Lenis for smooth scrolling with proper theater mode integration
 */
class ScrollManager {
    constructor() {
        this.lenis = null;
        this.isLocked = false;
        this.lockReason = null;
        this.scrollAccumulator = 0;
        this.escapeCallbacks = [];
        this.ESCAPE_THRESHOLD = 500;
        this.isMobile = !window.matchMedia('(pointer: fine)').matches;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    init() {
        // Skip Lenis on mobile or if user prefers reduced motion
        if (this.isMobile || this.prefersReducedMotion) {
            return this;
        }

        // Check if Lenis is loaded
        if (typeof Lenis === 'undefined') {
            console.warn('Lenis not loaded, falling back to native scroll');
            return this;
        }

        this.lenis = new Lenis({
            duration: 1.0,
            easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out cubic
            smoothWheel: true,
        });

        document.documentElement.classList.add('lenis-active');

        // Animation loop
        const raf = (time) => {
            this.lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return this;
    }

    /**
     * Lock scrolling (for theater mode, modals, etc.)
     * @param {string} reason - Why scrolling is locked ('theater', 'modal', etc.)
     */
    lock(reason = 'modal') {
        if (this.isLocked) return;
        this.isLocked = true;
        this.lockReason = reason;
        this.scrollAccumulator = 0;

        // Stop Lenis if active
        if (this.lenis) {
            this.lenis.stop();
        }

        // Also set overflow hidden for iOS/fallback
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }

    /**
     * Unlock scrolling
     */
    unlock() {
        if (!this.isLocked) return;
        this.isLocked = false;
        this.lockReason = null;
        this.scrollAccumulator = 0;

        // Restart Lenis if active
        if (this.lenis) {
            this.lenis.start();
        }

        // Restore overflow
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }

    /**
     * Smooth scroll to a target
     * @param {string|Element} target - CSS selector or element
     * @param {object} options - Scroll options
     */
    scrollTo(target, options = {}) {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        const opts = { offset: -navHeight, duration: 1.0, ...options };

        if (this.lenis) {
            this.lenis.scrollTo(target, opts);
        } else {
            // Fallback for mobile/reduced motion
            const el = typeof target === 'string' ? document.querySelector(target) : target;
            if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset + opts.offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    }

    /**
     * Process escape attempt for theater mode
     * Called by wheel/touch handlers when in theater lock
     * @param {number} deltaY - Scroll delta
     * @returns {boolean} - True if escape threshold was reached
     */
    processEscapeAttempt(deltaY) {
        if (!this.isLocked || this.lockReason !== 'theater') return false;

        this.scrollAccumulator += Math.abs(deltaY);

        if (this.scrollAccumulator >= this.ESCAPE_THRESHOLD) {
            this.escapeCallbacks.forEach(cb => cb());
            return true;
        }
        return false;
    }

    /**
     * Reset the escape accumulator (called after entering theater mode)
     */
    resetEscapeAccumulator() {
        this.scrollAccumulator = 0;
    }

    /**
     * Register a callback for when escape threshold is reached
     * @param {function} callback - Function to call on escape
     * @returns {ScrollManager} - For chaining
     */
    onEscapeAttempt(callback) {
        this.escapeCallbacks.push(callback);
        return this;
    }

    /**
     * Register a scroll callback (works with Lenis or native)
     * @param {function} callback - Function to call on scroll
     */
    onScroll(callback) {
        if (this.lenis) {
            this.lenis.on('scroll', callback);
        } else {
            window.addEventListener('scroll', callback);
        }
    }

    /**
     * Check if currently locked
     * @returns {boolean}
     */
    get locked() {
        return this.isLocked;
    }

    /**
     * Get current lock reason
     * @returns {string|null}
     */
    get reason() {
        return this.lockReason;
    }
}

// Create global instance
window.scrollManager = new ScrollManager();
