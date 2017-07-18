(function () {
  function setupPage() {
    var loader = _('.loader'),
        audio = _('.bg-music audio');

    setTimeout(function () {
      loader.style.transform = 'translateX(-100%)';
      audio.play();
      audio.volume = 0.7;

      // Setup page intro transitions
      new WOW().init();
    }, 1000);
  }

  onload = setupPage;
}());
