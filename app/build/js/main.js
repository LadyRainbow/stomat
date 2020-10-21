$ = jQuery.noConflict(true);
$(document).ready(function () {
    var $window = $(window);
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var $header = $('header');

    var $popUpGeneralBlock = $('.pop-up-general-block');

    var $overlayPopUpWRP = $('.pop-up-overlay-wrapper');
    var $overlay = $('.overlay-pop-up');
    var $closePopUpBtn = $('.pop-up-general-block-close-btn');

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    let vhMenu = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vhMenu', `${vhMenu}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vhMenu = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vhMenu', `${vhMenu}px`);
    });

    // scroll

    if ($('main').length) {
        headerChange();
        $(window).scroll(function() {
            headerChange();
        });
        $('.spectrum-name + p').each(function (index, value){
            var heightText = $(this).height();
            $(this).closest('.spectrum-block-content').css('transform', 'translateY(' + heightText + 'px)');
        });
    };

    // soft scroll
    $(".scrollTo").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        // анимируем переход к блоку, время: 500 мс
        $('body,html').animate({scrollTop: top}, 500);
        // находим высоту, на которой расположен блок
    });

    function headerChange () {
        if($window.scrollTop() > 100) {
            $header.addClass('header-scroll');
        } else {
            $header.removeClass('header-scroll');
        }
    };


    // slider
    $('.section-main-slider').slick({
        // autoplay: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-main-arrow'),
        nextArrow: $('.next-main-arrow'),
        dots: false
    });

    $('.main-rev-slider').slick({
        // autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-rev-arrow'),
        nextArrow: $('.next-rev-arrow'),
        dots: false
    });
    $('.ab-doc-slider').slick({
        // autoplay: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev-abDoc-arrow'),
        nextArrow: $('.next-abDoc-arrow'),
        dots: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                // arrows: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                // arrows: false
              }
            },
            {
              breakpoint: 557,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                // arrows: false
              }
            },
        ]
    });


    // fancybox
   var selector = '.ab-doc-slider .slick-slide:not(.slick-cloned) .fancy-link';

   // Skip cloned elements
    $().fancybox({
       selector : selector,
       hash: false,
       backFocus : false,
    });

   // form checked
    $('.checkbox-check').change(function() {
      if(this.checked) {
          $(this).closest('form').find('.btn-checkbox').removeClass('btn-checkbox-disabled');
      }
      else {
          $(this).closest('form').find('.btn-checkbox').addClass('btn-checkbox-disabled');
      }
    });

    // pagination
    if($('.blog-page').length) {
        $('#pagination-container').pagination({
            dataSource: [1, 2, 3, 4],
            pageSize: 1,
            showPrevious: true,
            showNext: true,
        });
    };



    // open/close tel
    $('.header-tel-img').click(function () {
        $('.header-tel').toggleClass('active');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.header-tel'); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('active');// скрываем его
		}
	});


    // go back
    $('.back-arrow').click(function(){
        window.history.back();
    });


    // menu
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $header.toggleClass('open-menu');
        $('body').toggleClass('active');
    });


    // only number
    $(".input-number").keypress(function(event){
      event = event || window.event;
      if (event.charCode && event.charCode!=0 && event.charCode!=8 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
    });


    // masked
    $('.mask-phone').mask('+999999?9999999999', {placeholder:""});



    // pop-ups
    function thnx () {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#thnx').addClass('active');
    };
    $('.open-pop-up').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#formPopUp').addClass('active');
    });


    $overlay.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });
    $closePopUpBtn.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });

});
