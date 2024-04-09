$(document).ready(function () {
    $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      var opacity = 0.8 - scrollPosition / 1500    ; 

      $('.background').css('opacity', opacity);
    });
  });
  