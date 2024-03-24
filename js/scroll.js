$(function() {
  
  $(".topbtn").on("click", function() {
    $("html").animate({
      scrollTop: $("html").offset().top
    }, 600, "swing");
  });
});