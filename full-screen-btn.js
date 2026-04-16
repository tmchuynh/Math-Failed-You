if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
  const toggleBtn = document.getElementById("fullscreenToggle");

  toggleBtn.addEventListener("click", function () {
    // Check if currently in fullscreen
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
    
    if (isFullscreen) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else {
      // Enter fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    }
  });

  // Listen for fullscreen changes (including ESC key)
  document.addEventListener("fullscreenchange", handleFullscreen);
  document.addEventListener("webkitfullscreenchange", handleFullscreen);
  document.addEventListener("mozfullscreenchange", handleFullscreen);
  document.addEventListener("MSFullscreenChange", handleFullscreen);

  function handleFullscreen() {
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || 
                        document.mozFullScreenElement || document.msFullscreenElement;
    
    if (isFullscreen) {
      toggleBtn.classList.add("on");
      toggleBtn.setAttribute("aria-label", "Exit fullscreen mode");
    } else {
      toggleBtn.classList.remove("on");
      toggleBtn.setAttribute("aria-label", "Enter fullscreen mode");
    }
  }
}
