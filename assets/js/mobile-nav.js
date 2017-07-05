(function () {
  var hamburgerIcon = _('.fa-navicon'),
      bodyContainer = _('.body-container'),
      navLinks = _('.mobile-nav-links'),
      closeNavLink = _('.mobile-logo').querySelector('.fa-close')
      showingMobileNav = false;

  hamburgerIcon.addEventListener('click', function () {
    if (showingMobileNav) {
      bodyContainer.style.transform = 'translateX(0)';
      navLinks.style.transform = 'translateX(-200px)';

      this.classList.remove('fa-close');
      this.classList.add('fa-navicon');
    }  else {
      bodyContainer.style.transform = 'translateX(40%)';
      navLinks.style.transform = 'translateX(-8px)';

      this.classList.remove('fa-navicon');
      this.classList.add('fa-close');
    }

    showingMobileNav = !showingMobileNav;
  });

}());