/*

© 2016–2017. Команда разработчиков ultron.pro.
Email: info@ultron.pro
Site: //ultron.pro/

*/





// ============= PRELOADER SCRIPT ===================
$(window).load(function() { 
	$('#preloader').addClass('hid');
});
// ============= END PRELOADER SCRIPT ===================
/*closestchild*/
 
        ;(function($){
          $.fn.closestChild = function(selector) {
            var $children, $results;
            
            $children = this.children();
            
            if ($children.length === 0)
              return $();
          
            $results = $children.filter(selector);
            
            if ($results.length > 0)
              return $results;
            else
              return $children.closestChild(selector);
          };
        })(window.jQuery);

/* /. closestchild*/




$(function(){
        var top_show = 280; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
        var speed = 500; // Скорость прокрутки
    	var $backButton = $('#up'), footerposition;
        
        
    	$(document).scroll(function () { // При прокрутке попадаем в эту функцию
    		/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
       
    		if ($(this).scrollTop() > top_show && $(this).scrollTop() < $(document).height() - $(window).height()-60) {
    			$backButton.fadeIn();
    		}
    		else {
    			$backButton.fadeOut();
    		}
    	});
    	$backButton.click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    		/* Плавная прокрутка наверх */
    		scrollto(0, speed);
    	});

        // scrollto
    	window.scrollto = function(destination, speed) {
    		if (typeof speed == 'undefined') {
    			speed = 800;
    		}
    		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-60}, speed);
    	};
    	$("a.scrollto").click(function () {
    		var elementClick = $(this).attr("href")
    		var destination = $(elementClick).offset().top;
    		scrollto(destination);
    		return false;
    	});
    	// end scrollto 

        // fancybox
        $('.fancybox').fancybox({
            padding: 0,
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        $('.fancyboxModal').fancybox({
            padding: 0,
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
            fitToView : false, 
            maxWidth: '100%',
            scrolling : "no",
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        // end fancybox
        
        
        
        

        // slick-carousel

            
            
            
            
            
            
            
            $('.top-slider').on('init', function(e, slick) {
                var $firstAnimatingElements = $('.item:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);    
            });
            $('.top-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);    
            });
            $('.top-slider').slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 2000,
                dots: true,
                fade: true,
                prevArrow: '<a href="#" class="slick-prev"><i class="material-icons">navigate_before</i></a>',
                nextArrow: '<a href="#" class="slick-next"><i class="material-icons">navigate_next</i></a>',
                responsive: [
                    {
                        breakpoint: 1350,
                        settings: {
                            arrows: false,
                            dots: true
                        }
                    }
                ]   
            });
            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function() {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function() {
                        $this.removeClass($animationType);
                    });
                });
            }
            
            
            $('.team-carousel').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 500,
                dots: false,
                swipeToSlide: true,
                prevArrow: '<a href="#" class="slick-prev"><i class="material-icons">navigate_before</i></a>',
                nextArrow: '<a href="#" class="slick-next"><i class="material-icons">navigate_next</i></a>',
                responsive: [
                {
                  breakpoint: 1350,
                  settings: {
                    arrows: false,
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    arrows: false,
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    arrows: false,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 460,
                  settings: {
                    arrows: false,
                    slidesToShow: 2
                  }
                }
              ]   
            });
            
            
            $('.rev-carousel').slick({
                infinite: true,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 500,
                arrows: false,
                responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ]   
            });
            
            
            
            
            

        
        // инициализация плагина jquery.maskedinput.js

                if ( !$("html").hasClass("touch") ){
                    windWidth = window.innerWidth;
                    if(windWidth > 992){
                        if(typeof $.mask !== "undefined"){
                            $.mask.definitions['~']='[+-]';
                            $('.tel').mask('+7(999) 999-9999');
                        }
                    }
                }
        
        
        // end

        

        
        // validation
        
        $('.rf').each(function(){
            var item = $(this),
            
            btn = item.find('.btn');
            
            
            function checkInput(){
                item.find('select.required').each(function(){
                    if($(this).val() == ''){
                        
                        // Если поле пустое добавляем класс-указание
                        $(this).parents('.form-group').addClass('error');
                        $(this).parents('.form-group').find('.error-message').show();

                    } else {
                        // Если поле не пустое удаляем класс-указание
                        $(this).parents('.form-group').removeClass('error');
                    }
                });
                
                
                
                
                
                item.find('input[type=text].required').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('error');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                        
                    }
                });
                
                
                item.find('input[type=password].required').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('error');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                        
                    }
                });
                
                
                if($('.pass1',item).length != 0){
                    var pass01 = item.find('.pass1').val();
                    var pass02 = item.find('.pass2').val();
                    if(pass01 != pass02){
                        $('.pass1, .pass2',item).addClass('error');
                        
                        
                        $('.pass1').parent('.form-group').find('.error-message').show();
                        $('.pass2').parent('.form-group').find('.error-message').show();
                    }
                }
                
                
                
                item.find('textarea.required').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('error');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                        
                    }
                });
                
                item.find('input[type=email]').each(function(){
                    var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                    var $this = $(this);
                    if($this.hasClass('required')){
                        
                        if (regexp.test($this.val())) {
                            $this.removeClass('error');
                        }else {
                            // Если поле пустое добавляем класс-указание
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                        }
                    }else{
                        
                        if($this.val() != ''){
                            if (regexp.test($this.val())) {
                                $this.removeClass('error');
                            }else {
                            
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                            }
                        }else{
                            $this.removeClass('error');
                        }
                    }
                    
                    
                });
                
                
                item.find('input[type=checkbox].required').each(function(){
                    if($(this).is(':checked')){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('error');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                    }
                });
                
            
            }

            btn.click(function(){
                checkInput();
                var sizeEmpty = item.find('.error:visible').size();
                if(sizeEmpty > 0){
                    return false;
                } else {
                    // Все хорошо, все заполнено, отправляем форму
                    
                    item.submit();
                    $.fancybox.close();
                }
            });

        });
        
        
        $('.required:not(.pass1, .pass2)').change(function(){
            if($(this).val() != ''){
                $(this).removeClass('error');
                $(this).parents('.form-group').find('.error-message').hide();
            }
            
        });
        
        $('.pass1').change(function(){
            if($(this).val() != ''){
                
                var pass1Val = $('.pass1').val();
                var pass2Val = $(this).parents('.rf').find('.pass2').val();
                
                if(pass1Val == pass2Val){
                    $('.pass1, .pass2').removeClass('error');
                    $('.pass1, .pass2').parents('.form-group').find('.error-message').hide();
                }

            }
            
        });
        
        $('.pass2').change(function(){
            if($(this).val() != ''){
                
                var pass2Val = $('.pass2').val();
                var pass1Val = $(this).parents('.rf').find('.pass1').val();
                
                if(pass1Val == pass2Val){
                    $('.pass1, .pass2').removeClass('error');
                    $('.pass1, .pass2').parents('.form-group').find('.error-message').hide();
                }

            }
            
        });
        
        
        $('select').change(function(){
            if($(this).val() == ''){     
                // Если значение empty
                $(this).parents('.form-group').removeClass('selected');

            } else {
                // Если значение не empty
                $(this).parents('.form-group').addClass('selected');
                $(this).parents('.form-group').removeClass('error');
            }
        });
        
        // end validation

        
        
        //Chrome Smooth Scroll
        
        /*var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        
        if(!iOS){
            try {
                $.browserSelector();
                if($("html").hasClass("chrome")) {
                    $.smoothScroll();
                }
            } catch(err) {
        
            };
        }*/
        
        // проверка на Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
            
        
        if(isIE){
            $('body').addClass('ie');
        }
        // end
        
        
        
        // lightgallery begin
        
        if($(".lightgallery").length > 0){
            $(".lightgallery").lightGallery({
                selector: 'a.lightgallery-link',
                thumbnail: false
            });
        }
        

        // light gallery end
        
        
        
        
        $('.menu-button').click(function(){
            $('.menu-button').toggleClass('active');
            $('.mobile-menu').toggleClass('open');
        });
        $('.mobile-menu, .menu-button').click(function(e){
            if ($(e.target).hasClass('fancyboxModal') == false) {
                e.stopPropagation();
            }
        });
        $('body').click(function(){
            $('.mobile-menu').removeClass('open');
            $('.menu-button').removeClass('active');
        });
        
        
        $('.top-menu ul > li').has('ul').addClass('down');
        $('.mobile-menu li > ul').before('<span class="dropdown-button"></span>');
        

        
        $('.mobile-menu .dropdown-button').click(function(){
            $(this).toggleClass('active');
            if($(this).siblings('ul').is(':visible')){
                $(this).siblings('ul').slideUp();
            }else{
                $(this).siblings('ul').slideDown();
            }
            
        });
        
        
        
        
        
        
        
        // retina magic
        
            if (window.devicePixelRatio > 1) {
                var lowresImages = $('img.retina');
            
                lowresImages.each(function(i) {
                  var lowres = $(this).attr('src');
                  var highres = lowres.replace(".", "_2x.");
                  $(this).attr('src', highres);
                });
              }
        
        // end retina
        
        

        
        
        
        // фиксация top-bar-wrapper при скроллинге страницы вниз
    
        var panel=$('.top-bar-wrapper'),
        pos=panel.offset().top;
        
        
        function fixedBar(){
            panel.removeClass('fixed');
            pos=panel.offset().top;
            if($(this).scrollTop() > pos && !panel.hasClass('fixed')){
                
                panel.addClass('fixed');
                
            }else if($(this).scrollTop() < pos && panel.hasClass('fixed')){  
                
                panel.removeClass('fixed');  
                
            }
        }
        
        fixedBar();
        
        
        
        
        // Прослушка события смены ориентации или ресайз окна
        
            window.addEventListener("resize", function() {
            	fixedBar();
            }, false);
        
        
            window.addEventListener("orientationchange", function() {
                fixedBar();
            }, false);

        // end
        
        
        
        
        $(window).scroll(function(){
            
            fixedBar();
            
        });

        
        // end фиксация    
        
        
        
        
      
        // Animation
        
        
        
        
        
        // /.Animation
        
        if ( !$("html").hasClass("touch") ){
            
            if ( !$("body").hasClass("no-animate") ){
                $('.feedback-section .container, .team-section .container, .about-section .inner, .about-section .inner > .row, .news-section .container, .hit-section .container, .hit-section .container .element').addClass("hidden");
                
                
                
                $('.feedback-section .container').viewportChecker({
                    offset: 400,
                    callbackFunction: function(){
                        $('.feedback-section .container').addClass("visible animated fadeInUp");
                        
                    }
                });
                
                $('.team-section .container').viewportChecker({
                    offset: 400,
                    callbackFunction: function(){
                        $('.team-section .container').addClass("visible animated fadeIn");
                        
                    }
                });
                
                $('.about-section .inner').viewportChecker({
                    offset: 400,
                    callbackFunction: function(){
                        $('.about-section .inner').addClass("visible animated fadeInUp");
                        $('.about-section .inner > .row').addClass("visible animated fadeIn");
                    }
                });
                
                $('.news-section .container').viewportChecker({
                    classToAdd: 'visible animated fadeIn',
                    offset: 400
                });
                
                $('.hit-section .container').viewportChecker({
                    classToAdd: 'visible animated fadeIn',
                    offset: 400,
                    callbackFunction: function(){
                        $('.hit-section .container .element').addClass("visible animated fadeInUp");
                    }
                });
            }
        }
        
        
        
        
        
        $('.mobile-menu li a').click(function(){
            $('.mobile-menu').removeClass('open');
            $('.menu-button.active').removeClass('active');
        });
        
        
        
        
        
        
        // ASIDE MENU
        
        
        $('.aside-menu li').has('ul').addClass('down');
        
        $('.aside-menu > ul li.down > ul').before('<span class="dropdown-button"></span>');
        
        
        $('.aside-menu .down .dropdown-button').each(function(){
            if($(this).siblings('ul').is(':visible')){
                $(this).addClass('active');
            }
        });
        
        
        
        $('.aside-menu .down .dropdown-button').click(function(){
            
            
            
            $(this).parent().toggleClass('open');
            if($(this).siblings('ul').is(':visible')){
                $(this).siblings('ul').slideUp();
                $(this).removeClass('active');
            }else{
                $(this).siblings('ul').slideDown();
                $(this).addClass('active');
            }
            
        });
        
        
        $('.aside-menu-title').click(function(){
            $('.aside-menu').toggleClass('active');
        });
        
        
        // ASIDE MENU END
        
        
        
        
        
        

  
        
});// end ready
  



jQuery(window).load(function () {
        if ( !$("html").hasClass("touch") ){
            $('.consult-section').parallax("0", -0.1);
        }
            
}); 

















