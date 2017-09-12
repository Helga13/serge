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
  
})