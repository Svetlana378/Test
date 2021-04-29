//Модальное окно

//открыть по кнопке
$('.js-btn').click(function() {
    $('main').css('filter', 'blur(5px)'); // эффект размытия при открывании окна
    $('.js-overlay').fadeIn(); // плавность открытия окна и удаление display none
//    $('js-overlay').addClass('disabled');
});

//закрыть на крестик
$('.js-close').click(function() {
    $('.js-overlay').fadeOut(); // накладывает свойство display none и закрывает элемент overlay
    $('main').css('filter','none'); //убирает размытие после закрывании окна
});
