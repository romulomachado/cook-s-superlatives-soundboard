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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-50379115-3', 'auto');
ga('send', 'pageview');

