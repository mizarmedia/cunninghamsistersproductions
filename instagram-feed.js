/**
 * Custom Instagram Feed using Behold.so JSON API
 * Fetches and renders posts from @thecunninghamsisters
 */
(function() {
    const FEED_URL = 'https://feeds.behold.so/6wzmfXZFQdMZZTTATVvR';
    const MAX_POSTS = 6;

    async function fetchInstagramFeed() {
        try {
            const response = await fetch(FEED_URL);
            if (!response.ok) throw new Error('Failed to fetch feed');
            return await response.json();
        } catch (error) {
            console.error('Instagram feed error:', error);
            return null;
        }
    }

    function createPostElement(post) {
        const article = document.createElement('a');
        article.href = post.permalink;
        article.target = '_blank';
        article.rel = 'noopener noreferrer';
        article.className = 'instagram-post';
        article.setAttribute('aria-label', post.prunedCaption ? post.prunedCaption.substring(0, 100) + '...' : 'Instagram post');

        // Get the image URL (use thumbnail for videos, first image for carousels)
        let imageUrl = post.thumbnailUrl || post.mediaUrl;
        if (post.sizes && post.sizes.medium && post.sizes.medium.mediaUrl) {
            imageUrl = post.sizes.medium.mediaUrl;
        }

        // Create image
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = post.prunedCaption ? post.prunedCaption.substring(0, 100) : 'Instagram post';
        img.loading = 'lazy';

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'instagram-post-overlay';

        // Add media type indicator
        if (post.mediaType === 'VIDEO' || post.isReel) {
            const videoIcon = document.createElement('span');
            videoIcon.className = 'instagram-post-icon';
            videoIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>';
            overlay.appendChild(videoIcon);
        } else if (post.mediaType === 'CAROUSEL_ALBUM') {
            const carouselIcon = document.createElement('span');
            carouselIcon.className = 'instagram-post-icon';
            carouselIcon.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/></svg>';
            overlay.appendChild(carouselIcon);
        }

        article.appendChild(img);
        article.appendChild(overlay);

        return article;
    }

    function renderFeed(data, container) {
        if (!data || !data.posts || data.posts.length === 0) {
            container.innerHTML = '<p class="instagram-feed-error">Unable to load Instagram feed</p>';
            return;
        }

        // Clear loading state
        container.innerHTML = '';

        // Create grid
        const grid = document.createElement('div');
        grid.className = 'instagram-grid';

        // Render posts (limit to MAX_POSTS)
        const posts = data.posts.slice(0, MAX_POSTS);
        posts.forEach(post => {
            grid.appendChild(createPostElement(post));
        });

        container.appendChild(grid);
    }

    function initFeed() {
        const containers = document.querySelectorAll('.instagram-feed-container');
        if (containers.length === 0) return;

        // Add loading state
        containers.forEach(container => {
            container.innerHTML = '<div class="instagram-feed-loading"><span></span><span></span><span></span></div>';
        });

        // Fetch and render
        fetchInstagramFeed().then(data => {
            containers.forEach(container => {
                renderFeed(data, container);
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFeed);
    } else {
        initFeed();
    }
})();
