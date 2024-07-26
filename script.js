    // Function to hide the loader and restore scrolling
    function hideLoader() {
        const loader = document.getElementById('loader');

        // Start fading out the loader
        loader.style.opacity = '0';

        // Wait for the opacity transition to complete
        setTimeout(function() {
            // Hide the loader completely
            loader.style.display = 'none';

            // Restore scrolling after loader is hidden
            document.body.style.overflow = 'auto';
        }, 500); // Wait for the 500ms transition to finish
    }

    // Wait for the page to fully load
    window.onload = function() {
        // Disable scrolling while loader is visible
        document.body.style.overflow = 'hidden';

        // Hide the loader after 3 seconds
        setTimeout(hideLoader, 2000); // Initial delay (3000ms or 3 seconds)
    };


function updateElementStyles() {
    // Select all images with the classes "cat" and "city"
    const images = document.querySelectorAll('.cat, .city'); 
    const logo = document.querySelector('.logo');

    // Define transition ranges for image bottom values
    const minWidth = 600; // Minimum width (px) for transition
    const maxWidth = 1710; // Maximum width (px) for transition

    // Get the current window width
    const currentWidth = window.innerWidth;

    // Ensure currentWidth is within the minWidth and maxWidth range
    const clampedWidth = Math.max(minWidth, Math.min(maxWidth, currentWidth));

    images.forEach(img => {
        const isCat = img.classList.contains('cat');
        const isCity = img.classList.contains('city');

        // Define maxBottom and minBottom for each class
        let maxBottom;
        let minBottom;

        if (isCat) {
            maxBottom = -55; // Maximum bottom value (in vh) for .cat
            minBottom = 0;   // Minimum bottom value (in vh) for .cat
        } else if (isCity) {
            maxBottom = -50; // Maximum bottom value (in vh) for .city
            minBottom = 8;  // Minimum bottom value (in vh) for .city
        }

        // Calculate the new bottom value based on the clamped window width
        const bottomValue = ((clampedWidth - minWidth) / (maxWidth - minWidth)) * (maxBottom - minBottom) + minBottom;

        // Set the new bottom value in vh
        img.style.bottom = bottomValue + 'vh';
    });

    if (logo) {
        const logoMinWidth = 70; // Minimum width (percentage) for the logo
        const logoMaxWidth = 20; // Maximum width (percentage) for the logo

        // Calculate the new width value based on the clamped window width
        const logoWidth = ((clampedWidth - minWidth) / (maxWidth - minWidth)) * (logoMaxWidth - logoMinWidth) + logoMinWidth;

        // Set the new width value in percentage
        logo.style.width = logoWidth + '%';
    }
}

// Add event listeners for initial load and window resize
window.addEventListener('load', updateElementStyles);
window.addEventListener('resize', updateElementStyles);
