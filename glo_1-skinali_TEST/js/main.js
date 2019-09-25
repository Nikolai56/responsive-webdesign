$(window).load(function () {
  //  активация до и после
$(".before-after").twentytwenty({
before_label: 'Без скинали', // Set a custom before label
after_label: 'Co скинали' // Set a custom after label
});
//  подключаем slick slider
$('.before-slider').slick({
draggable: false,
dots: true,
dotsClass:'before-slider__dots',
prevArrow: $('.arrow-left'),
nextArrow: $('.arrow-right')
});
//  настраиваем меню
$('.menu-button').on('click', function(){
$('.menu').toggleClass('menu_active')
  });

  //  настройка select
$('.select__checked').on('click', function(){
$('.select__dropdown').toggleClass('select__dropdown_open');
  });
$('.select__option').on('click', function(){
     var value = $(this).attr('data-value');
     $('#select-type').val(value);
     $('.select__checked').text(value);
     $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  //  прокрутка
  $("a[href^='#']").click(function(){
     var _href = $(this).attr("href");
     $("html,body").animate({scrollTop:$(_href).offset().top -120 + "px"});
     return false;
  });
  //  настройка маски
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
});
