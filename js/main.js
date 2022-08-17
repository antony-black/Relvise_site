$(function(){

    $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
    });


    $('.popup-video__link').magnificPopup({
      disableOn: 300,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });


});