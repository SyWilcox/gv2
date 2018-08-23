$(document).ready(function() {
  var count = 1;

  //menu button
  $('#menu-button').click(function() {
    $(this).toggleClass("is-active");
    count++;
    if(count % 2 == 0) {
      $('.menu').animate({marginTop: "0px"}, 400);
      $('.dark-overlay').animate({opacity: "0.5"}, 500);
      $('#menu').addClass("bounceInDown animated");
      $('#about').addClass("bounceInDown animated");
      $('#contact').addClass("bounceInDown animated");
    } else if (count % 2 != 0) {
      $('.menu').animate({marginTop: "-100px"}, 400);
      $('.dark-overlay').animate({opacity: "0"}, 500);
      $('#menu').removeClass("bounceInDown animated");
      $('#about').removeClass("bounceInDown animated");
      $('#contact').removeClass("bounceInDown animated");
    }
  })

  //insta
  $(".i").hover(function(){
    $(this).css("color", "white");
    }, function(){
    $(this).css("color", "inherit");
});

  //animated h3
  $(window).scroll(function() {
    if($(this).scrollTop() > 400) {
      $('.animate-h3').animate({opacity: "1"}, 10);
      $('.animate-h3').addClass("fadeInLeft animated");
    }
  })

  //slider
  $('#arrowR').click(function() {
    $('#slide2').removeClass("slideOutDown animated");
    $('#slide1').animate({opacity: "0"}, 600);
    $('#slide1').addClass("slideOutRight animated");
    $('#slide2').animate({opacity: "1"}, 600);
    $('#slide2').addClass("slideInUp animated");
  })

  $('#arrowL').click(function() {
    $('#slide1').removeClass("slideOutRight animated");
    $('#slide2').animate({opacity: "0"}, 600);
    $('#slide2').addClass("slideOutDown animated");
    $('#slide1').animate({opacity: "1"}, 600);
    $('#slide1').addClass("slideInRight animated");
  })

})
