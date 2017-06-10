(function () {
  var videos = __('video');

  function playVideo() {
    this.play();
  }

  function pauseVideo() {
    this.pause();
  }

  function preventContextMenu(e) {
    e.preventDefault();
  }

  videos.forEach(function (video) {
    video.addEventListener('mouseover', playVideo);
    video.addEventListener('mouseleave', pauseVideo);
    video.addEventListener('contextmenu', preventContextMenu)
  });
}());