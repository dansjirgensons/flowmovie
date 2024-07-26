    document.addEventListener('DOMContentLoaded', () => {
        const playButton = document.getElementById('trailer');
        const popup = document.getElementById('popup');
        const closeButton = document.getElementById('closeButton');
        const vimeoEmbed = document.getElementById('vimeoEmbed');
    
        // Vimeo video ID
        const vimeoVideoId = '946861149'; // Replace with your Vimeo video ID
    
        playButton.addEventListener('click', () => {
            // Set the Vimeo embed URL
            vimeoEmbed.src = `https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1`;
    
            // Show the popup
            popup.style.display = 'flex';
    
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        });
    
        closeButton.addEventListener('click', () => {
            // Hide the popup and stop the video
            popup.style.display = 'none';
            vimeoEmbed.src = '';
    
            // Re-enable scrolling
            document.body.style.overflow = '';
        });
    
        // Close popup if clicking outside the content
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
                vimeoEmbed.src = '';
    
                // Re-enable scrolling
                document.body.style.overflow = '';
            }
        });
    });
    