(function() {
  document.querySelector('.main-nav').classList.remove('main-nav--nojs');

  //Всплывающее меню для мобильных устройств
  var toggle = document.querySelector('.main-nav__toggle');
  toggle.addEventListener('click', function(e) {
    document.querySelector('.main-nav').classList.toggle('main-nav--closed');
    document.querySelector('.main-nav').classList.toggle('main-nav--opened');
  });

  //Вызов модального окна для выбора размера
  var orders = document.querySelectorAll('.order-button');

  for (var i = 0; i < orders.length; i++) {
    orders[i].addEventListener('click', function (e) {
      document.querySelector('.modal').classList.remove('modal--closed');
      document.querySelector('.modal').classList.add('modal--opened');
      event.preventDefault();
    });
  }

  //Закрытие модельного окна
  var modalClose = document.querySelector('.modal__button');
  modalClose.addEventListener('click', function(e) {
    document.querySelector('.modal').classList.remove('modal--opened');
    document.querySelector('.modal').classList.add('modal--closed');
  });

  //Подключаем полифил picture для ИЕ
  document.createElement( "picture" );
})();
