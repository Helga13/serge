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
  
   // dropdown
  $('.js-dropdown').on('click', function (e) {
    e.preventDefault();
    if($(this).hasClass('active')){
      $(this).toggleClass('active').next('.dropdown_block').slideUp(200);
    }else{
      $('.js-dropdown').removeClass('active').next('.dropdown_block').slideUp(100);
      $(this).toggleClass('active').next('.dropdown_block').slideToggle(200);
    }
  });
  
  // select
  
  $('.js-select').select2({
    minimumResultsForSearch: Infinity 
  });
  
  // slider on product page
  
  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
  });
  
  // calc
  
  function number() {
    var number = $(".js-number");
    number.each(function () {
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function () {
        var val = +(input.val());
        if (val >= max_number) {
          return false
        }
        else {
          val += 1;
          input.val(val);
        }
      });
      minus.on("click", function () {
        var val = +(input.val());
        if (val > 1) {
          val -= 1;
          input.val(val);
        }
        return false;
      });
      input.on("change", function () {
        var val = +$(this).val();
        if (val > max_number) {
          val = max_number;
          $(this).val(val);
        }
        if (val == '') {
          val = 1;
          $(this).val(val);
        }
      });
    });
  }
  number();
  
  // tabs
	$('.tabs_block').each(function () {
		$(this).find('.tab').each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();	$(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
			});
		});
	});
  
  // matchHeight
  
	$('.item_product').matchHeight();
  
})