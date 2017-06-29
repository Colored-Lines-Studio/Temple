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
    elem.addEventListener('click', function (e) {

      modal.style.transform = 'scale(1)';

      var modalContent = modal.querySelector('.modal-content'),
          imgs = modalContent.querySelectorAll('img'),
          img = modalContent.querySelector('[data-belongs-to=' + this.dataset.owner + ']')

      modalContent.querySelector('.quote').textContent = this.dataset.personalQuote;
      modalContent.querySelector('.author-name').textContent = this.dataset.authorName;
      modalContent.querySelector('.title').textContent = this.dataset.authorTitle;

      imgs.forEach(function (img) {
        img.style.display = 'none';
      });
      img.style.display = 'block';

    });
  });

  modal.addEventListener('click', function (e) {
    if (e.target.className.match(/modal|fa-close/)) {
      this.style.transform = 'scale(0)';
    }
  })
}());