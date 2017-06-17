(function() {
  document.querySelector('.main-nav').classList.remove('main-nav--nojs');

  var toggle = document.querySelector('.main-nav__toggle');
  toggle.addEventListener('click', function(e) {
    document.querySelector('.main-nav').classList.toggle('main-nav--closed');
    document.querySelector('.main-nav').classList.toggle('main-nav--opened');
  });
})();
