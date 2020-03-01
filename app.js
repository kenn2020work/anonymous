$(function(){
       
  var pageTop1 = $("#top");
  pageTop1.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () {
 
    if($(this).scrollTop() >= 200) {
      pageTop1.css( "bottom", "30px" );
    } else {
      pageTop1.css( "bottom", "-85px" );
    }
  });

});
 
$('#btn').click(function() {
  $('#toggle').toggleClass('show');
  $('#toggle').slideToggle(800);
})

