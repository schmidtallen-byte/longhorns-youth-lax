document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var navlinks = document.querySelector('.navlinks');
  if (burger && navlinks) {
    burger.addEventListener('click', function () {
      navlinks.classList.toggle('open');
    });
  }
  // On mobile, tapping a dropdown label toggles its submenu instead of relying on hover
  document.querySelectorAll('.dropdown > button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        btn.parentElement.classList.toggle('open');
      }
    });
  });
});
