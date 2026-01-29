// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fixed parallax effect - relative to each section
function updateParallax() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.parallax').forEach(container => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.bottom > 0 && rect.top < windowHeight) {
            const img = container.querySelector('img');
            if (img) {
                const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                const offset = (scrollProgress - 0.5) * 60;
                img.style.transform = `translateY(${offset}px)`;
            }
        }
    });
}

if (!prefersReducedMotion) {
    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    updateParallax();
}

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// ============================================
// Theater Mode for Video Section (HTML5 Video)
// ============================================
const videoSection = document.querySelector('.video-section');
let theaterMode = false;
let theaterCooldown = false;
let scrollLocked = false;
let scrollAccumulator = 0;
let isPlaying = false;
let isMuted = true;
let hasExitedOnce = false;
const ESCAPE_THRESHOLD = 500;

// Get video element
const video = document.getElementById('hero-video');

// Custom control elements
const playBtn = document.querySelector('.play-btn');
const muteBtn = document.querySelector('.mute-btn');
const fullscreenBtn = document.querySelector('.fullscreen-btn');
const progressBar = document.querySelector('.video-progress-bar');
const progressContainer = document.querySelector('.video-progress');
const timeDisplay = document.querySelector('.video-time');
const iconPlay = document.querySelector('.icon-play');
const iconPause = document.querySelector('.icon-pause');
const iconMuted = document.querySelector('.icon-muted');
const iconUnmuted = document.querySelector('.icon-unmuted');
const unmuteHint = document.querySelector('.unmute-hint');
const videoControls = document.querySelector('.video-controls');
const cinemaOverlay = document.querySelector('.cinema-play-overlay');
const videoWrapper = document.querySelector('.video-wrapper');
const theaterExitBtn = document.querySelector('.theater-exit-btn');

// Initialize video controls
function initVideoPlayer() {
    if (!video) return;

    // Update progress bar on time update
    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percent + '%';
        timeDisplay.textContent = formatTime(video.currentTime);
    });

    // Sync play state
    video.addEventListener('play', () => {
        isPlaying = true;
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    });

    video.addEventListener('pause', () => {
        isPlaying = false;
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    });

    // Set initial muted state
    video.muted = true;
    isMuted = true;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

function enterTheaterMode() {
    if (theaterMode || theaterCooldown) return;
    theaterMode = true;
    scrollLocked = true;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('theater-mode');

    videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

    cinemaOverlay.classList.remove('visible');
    unmuteHint.classList.add('visible');
    videoControls.classList.remove('revealed');

    if (video) {
        video.muted = true;
        isMuted = true;
        iconMuted.style.display = 'block';
        iconUnmuted.style.display = 'none';
        video.play().catch(() => {});
    }

    scrollAccumulator = 0;
    setTimeout(() => {
        scrollAccumulator = 0;
        scrollLocked = false;
    }, 1000);
}

function exitTheaterMode() {
    theaterMode = false;
    scrollLocked = false;
    scrollAccumulator = 0;
    hasExitedOnce = true;

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.classList.remove('theater-mode');

    unmuteHint.classList.remove('visible');
    videoControls.classList.remove('revealed');
    cinemaOverlay.classList.add('visible');

    if (video) {
        video.pause();
        video.muted = true;
        isMuted = true;
        iconMuted.style.display = 'block';
        iconUnmuted.style.display = 'none';
    }

    theaterCooldown = true;
    setTimeout(() => { theaterCooldown = false; }, 2000);
}

// Unmute hint click handler
if (unmuteHint) {
    unmuteHint.addEventListener('click', () => {
        if (!video) return;
        isMuted = false;
        video.muted = false;
        iconMuted.style.display = 'none';
        iconUnmuted.style.display = 'block';
        unmuteHint.classList.remove('visible');
        videoControls.classList.add('revealed');
    });
}

// Play/Pause button
if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (!video) return;
        if (isPlaying) {
            video.pause();
        } else {
            video.play().catch(() => {});
        }
    });
}

// Mute/Unmute button
if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        if (!video) return;
        isMuted = !isMuted;
        video.muted = isMuted;
        iconMuted.style.display = isMuted ? 'block' : 'none';
        iconUnmuted.style.display = isMuted ? 'none' : 'block';
    });
}

// Fullscreen button
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
        if (!video) return;

        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (videoWrapper.requestFullscreen) {
            videoWrapper.requestFullscreen();
        } else if (videoWrapper.webkitRequestFullscreen) {
            videoWrapper.webkitRequestFullscreen();
        }
    });
}

// Cinema overlay to re-enter theater mode
if (cinemaOverlay) {
    cinemaOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        cinemaOverlay.classList.remove('visible');
        enterTheaterMode();
    });
}

// Exit button
if (theaterExitBtn) {
    theaterExitBtn.addEventListener('click', () => {
        exitTheaterMode();
    });
}

// Click on progress bar to seek
if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
        if (!video) return;
        const rect = progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        video.currentTime = percent * video.duration;
    });
}

// Detect scroll into video section
if (videoSection) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5 && !hasExitedOnce) {
                enterTheaterMode();
            }
        });
    }, { threshold: [0.5] });

    videoObserver.observe(videoSection);
}

// Handle escape scrolling (wheel events)
window.addEventListener('wheel', (e) => {
    if (!theaterMode) return;

    if (scrollLocked) {
        e.preventDefault();
        return;
    }

    scrollAccumulator += Math.abs(e.deltaY);

    if (scrollAccumulator > ESCAPE_THRESHOLD) {
        exitTheaterMode();
    } else {
        e.preventDefault();
    }
}, { passive: false });

// Touch support for mobile
let touchStartY = 0;
window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchmove', (e) => {
    if (!theaterMode) return;

    if (scrollLocked) {
        e.preventDefault();
        return;
    }

    const touchDelta = Math.abs(e.touches[0].clientY - touchStartY);
    scrollAccumulator += touchDelta * 0.5;

    if (scrollAccumulator > ESCAPE_THRESHOLD) {
        exitTheaterMode();
    } else {
        e.preventDefault();
    }
}, { passive: false });

// Escape key exits theater mode
window.addEventListener('keydown', (e) => {
    if (theaterMode && e.key === 'Escape') {
        exitTheaterMode();
    }
});

// Initialize video player on page load
document.addEventListener('DOMContentLoaded', initVideoPlayer);

// ============================================
// Team Card Modal
// ============================================
const teamModal = document.querySelector('.team-modal');
const teamOverlay = document.querySelector('.team-grid-overlay');

if (teamModal && teamOverlay) {
    document.querySelectorAll('.team-card[data-person]').forEach(card => {
        card.addEventListener('click', () => {
            const photo = card.querySelector('.team-card-photo img').cloneNode();
            const name = card.querySelector('h4').textContent;
            const role = card.querySelector('.team-card-role').textContent;
            const bio = card.querySelector('.team-card-expanded p').innerHTML;
            const imdbLink = card.querySelector('.team-card-imdb');

            teamModal.querySelector('.team-modal-photo').innerHTML = '';
            teamModal.querySelector('.team-modal-photo').appendChild(photo);
            teamModal.querySelector('.team-modal-name').textContent = name;
            teamModal.querySelector('.team-modal-role').textContent = role;
            teamModal.querySelector('.team-modal-bio').innerHTML = bio;

            const modalImdb = teamModal.querySelector('.team-modal-imdb');
            if (imdbLink) {
                modalImdb.href = imdbLink.href;
                modalImdb.textContent = imdbLink.textContent;
                modalImdb.style.display = 'inline-block';
            } else {
                modalImdb.style.display = 'none';
            }

            teamModal.classList.add('active');
            teamOverlay.classList.add('active');
        });
    });

    function closeTeamModal() {
        teamModal.classList.remove('active');
        teamOverlay.classList.remove('active');
    }

    document.querySelector('.team-modal-close').addEventListener('click', closeTeamModal);
    teamOverlay.addEventListener('click', closeTeamModal);
    teamModal.addEventListener('click', (e) => {
        if (e.target === teamModal) {
            closeTeamModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && teamModal.classList.contains('active')) {
            closeTeamModal();
        }
    });
}

// ============================================
// Impact Section - Floating Effect
// ============================================
const impactSection = document.querySelector('.impact');
const impactBoxes = document.querySelectorAll('.impact-split');
const hoveredBoxes = new Set();

if (impactSection && window.matchMedia('(hover: hover)').matches) {
    impactBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            hoveredBoxes.add(box);
            box.style.transform = 'scale(1.03)';
        });

        box.addEventListener('mouseleave', () => {
            hoveredBoxes.delete(box);
        });
    });

    const boxSettings = [
        { xMult: 0.025, yMult: 0.01 },
        { xMult: 0.012, yMult: 0.02 }
    ];

    impactSection.addEventListener('mousemove', (e) => {
        const sectionRect = impactSection.getBoundingClientRect();
        const mouseX = e.clientX - sectionRect.left;
        const mouseY = e.clientY - sectionRect.top;

        impactBoxes.forEach((box, index) => {
            if (hoveredBoxes.has(box)) return;

            const settings = boxSettings[index];

            let x, y;
            if (index === 0) {
                x = (mouseX - sectionRect.width * 0.3) * settings.xMult;
                y = (mouseY - sectionRect.height * 0.5) * settings.yMult;
            } else {
                x = (sectionRect.width * 0.7 - mouseX) * settings.xMult;
                y = (mouseY - sectionRect.height * 0.4) * settings.yMult;
            }

            x = Math.max(-6, Math.min(6, x));
            y = Math.max(-4, Math.min(4, y));

            box.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    impactSection.addEventListener('mouseleave', () => {
        impactBoxes.forEach(box => {
            if (!hoveredBoxes.has(box)) {
                box.style.transform = '';
            }
        });
    });
}

// Newsletter form - split name into FNAME/LNAME before submit
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        const fullNameInput = this.querySelector('input[name="FULLNAME"]');
        const fnameInput = this.querySelector('input[name="FNAME"]');
        const lnameInput = this.querySelector('input[name="LNAME"]');

        if (fullNameInput && fnameInput && lnameInput) {
            const fullName = fullNameInput.value.trim();
            const nameParts = fullName.split(' ');
            fnameInput.value = nameParts[0] || '';
            lnameInput.value = nameParts.slice(1).join(' ') || '';
        }
    });
}
