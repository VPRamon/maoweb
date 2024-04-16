document.addEventListener('DOMContentLoaded', function() {
    var vid = document.getElementById('fullscreen-video');
    var alreadyUnmuted = false; // Flag to check if we've already unmuted the video

    // Attempt to play the video automatically.
    vid.play().catch(function(error) {
        console.log('Autoplay was prevented: ' + error.message);
    });

    // Adding event listeners to handle different actions separately
    vid.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default play/pause toggle by the browser

        // Toggle fullscreen and mute only if the video is already playing
        if (!vid.paused && !alreadyUnmuted) {
            toggleSoundAndFullscreen();
            alreadyUnmuted = true; // Ensure we don't toggle repeatedly
        }
    });

    function toggleSoundAndFullscreen() {
        // Toggle mute
        if (vid.muted) {
            vid.muted = false;
        }

        // Request fullscreen
        //if (!document.fullscreenElement && vid.requestFullscreen) {
        //    vid.requestFullscreen().catch(err => {
        //        console.log(`Error attempting to enable fullscreen: ${err.message}`);
        //    });
        //}
    }
});
