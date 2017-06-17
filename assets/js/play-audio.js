(function () {
  var audio = _('audio'),
      audioCtrl = _('.sound'),
      audioIcon = _('.sound .fa');

  function toggleSound() {
    if (audio.paused) {
      audio.play();
      audioIcon.classList.remove('fa-volume-up');
      audioIcon.classList.add('fa-volume-off');
    } else {
      audio.pause();
      audioIcon.classList.remove('fa-volume-off');
      audioIcon.classList.add('fa-volume-up');
    }
  }

  audioCtrl.addEventListener('click', toggleSound);
}());