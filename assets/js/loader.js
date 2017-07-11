(function () {
  function setupPage() {
    var loader = _('.loader'),
        body = _('body'),
        container = _('.body-container'),
        audio = _('.bg-music audio');

    setTimeout(function () {
      loader.style.transform = 'translateX(-100%)';
      body.style.backgroundImage = 'url("assets/images/bg.jpg")';
      container.style.display = 'flex';
      audio.play();
      audio.volume = 0.7;
    }, 1000);
  }

  onload = setupPage;
}());
