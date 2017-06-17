(function () {
  var videos = __('video'),
      xCoord;

  document.addEventListener('mouseover', function (e) {
    xCoord = e.pageX;
  });

  function playVideo() {
    this.play();
  }

  function addHoverEffectToActionBtn() {
    var elem = _('.' + this.dataset.hoverEffect);

    elem.style.animationDelay = '';

    elem.classList.remove('wow');
    elem.classList.remove('borderFadeIn');

    elem.classList.add('pulsate');
  }

  function removeHoverEffectFromActionBtn() {
    var elem = _('.' + this.dataset.hoverEffect);

    elem.classList.remove('pulsate');
  }

  function resumeVideo() {
    this.play();
  }

  function preventContextMenu(e) {
    e.preventDefault();
  }

  function pauseVideoIfCursorActive(e) {
    var pos = this.getBoundingClientRect(),
        lPos = this.getBoundingClientRect().left,
        rPos = this.getBoundingClientRect().right;

    if ( this.currentTime >= 3 && this.currentTime <= 4 && xCoord >= lPos && xCoord <= rPos) {
      this.pause();
    }
  }

  videos.forEach(function (video) {
    video.addEventListener('timeupdate', pauseVideoIfCursorActive);
    video.addEventListener('mouseover', playVideo);
    video.addEventListener('mouseover', addHoverEffectToActionBtn);
    video.addEventListener('mouseleave', resumeVideo);
    video.addEventListener('mouseleave', removeHoverEffectFromActionBtn);
    video.addEventListener('contextmenu', preventContextMenu);
  });
}());