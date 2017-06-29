(function () {
  var actionBtns = __('[class*="-action-button"]'),
      modal = _('.modal'),
      glow = _('.glow'),
      xPos,
      yPos;

  function showGlow(x, y) {
    glow.style.visibility = 'visible';
    glow.style.top = (y - 20)+ 'px';
    glow.style.left = (x - 20) + 'px';
  }

  function hideGlow() {
    glow.style.visibility = 'hidden';
  }

  document.addEventListener('click', function (e) {
    showGlow(e.pageX, e.pageY);

    setTimeout(function () {
      hideGlow();
    }, 400);

    modal.style.transformOrigin = '0 0'; //e.pageX + 'px ' + e.pageY + 'px';
  });

  actionBtns.forEach(function (elem) {
    elem.addEventListener('click', function () {
      modal.style.transform = 'scale(1)';

      var modalContent = modal.querySelector('.modal-content');

      modalContent.querySelector('.quote').textContent = this.dataset.personalQuote;
      modalContent.querySelector('.author-name').textContent = this.dataset.authorName;
      modalContent.querySelector('.title').textContent = this.dataset.authorTitle;
      modalContent.querySelector('.img-wrapper img').src = this.dataset.imageUrl;
    })
  });

  modal.addEventListener('click', function (e) {
    if (e.target.className.match(/modal|fa-close/)) {
      this.style.transform = 'scale(0)';
    }
  })
}());