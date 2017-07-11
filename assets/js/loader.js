(function () {
  function setupPage() {
    setTimeout(function () {
      _('.loader').style.transform = 'translateX(-100%)';
      _('.bg-music audio').play();
    }, 1000);
  }

  onload = setupPage;
}());