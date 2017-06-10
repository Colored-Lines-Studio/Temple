(function () {
  var _ = document.querySelector.bind(document),
      __ = document.querySelectorAll.bind(document);

  // Make the selectors globally available via the window object

  window._ = _;
  window.__ = __;
}());