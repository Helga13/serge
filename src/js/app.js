$(document).ready(function () {
  
  'use strict'
  
//banner
  
  $('.js-slider').not('.slick-initialized').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1
  });
  
  // video 
  
  var myPlayer = $('.video');  
  var w = parseInt($('.video').css('width'));
  var h = parseInt($('.video').css('height')) ;

	$('video').mediaelementplayer({
		alwaysShowControls: true,
		videoVolume: 'horizontal',
		defaultVideoWidth: w ,
		defaultVideoHeight: h,
		// if set, overrides <video width>
		videoWidth: -1,
		// if set, overrides <video height>
		videoHeight: -1,
		enableAutosize: true,
		videoVolume: 'vertical'
	});
  
  //menu
  
  var body = $('body');
  
  $('.js-toggle-menu').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
      $('#js-menu').fadeOut(100);
      $(this).removeClass('is-active');
      body.removeClass('no-scroll');
    }
    else {
      $('#js-menu').fadeIn(100);
      $(this).addClass('is-active');
      body.toggleClass('no-scroll');
    }
    return false;
  });
  
  $('.popup_close').on('click', function (e) {
    e.preventDefault();
    $('#js-menu').fadeOut(100);
    $('.js-toggle-menu, .js-search, .js-popupCall').removeClass('is-active');
    body.removeClass("no-scroll");
  });
  
  
})