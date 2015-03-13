$(document).ready(function(){
  $('.btn').on('click', function() {
    element = $(this).children('.fa');
    if (element.hasClass('fa-play')) {
      element.removeClass('fa-play');
      element.siblings('audio')[0].play();
      element.addClass('fa-stop');
    } else {
      element.removeClass('fa-stop');
      element.siblings('audio')[0].pause();
      element.siblings('audio')[0].currentTime = 0;
      element.addClass('fa-play');
    }
  });

  $('audio').on('ended', function() {
    element = $(this).siblings('.fa');
    element.removeClass('fa-stop');
    element.addClass('fa-play');
  });
});
