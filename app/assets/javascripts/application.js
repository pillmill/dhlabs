// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap.min
//= require parallax
//= require picturefill
//= require_tree .

$(document).ready(function () {
  // Scroll-down function
  $('#scroll-down-button').click(function () {
    $('html, body').animate({
        scrollTop: $('#mission').offset().top - 250
    }, 'slow');
  });

  // Sticky navbar function
  $(window).scroll(function () {
      if ($(window).scrollTop() > 1000) {
          $('nav').removeClass('navbar-static-top').addClass('navbar-fixed-top');
      };
      if ($(window).scrollTop() <= 1000) {
          $('nav').removeClass('navbar-fixed-top').addClass('navbar-static-top');
      };
  }
  );

});
