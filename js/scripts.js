$(function () {
  //Initialize skrollr
  var s = skrollr.init();

  //Adds a class to the content after the header to make it position: relative
  var content = $("#content");
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1599) {
        content.addClass("relative");
        $('a.button').smoothScroll({
          offset: 0,
          afterScroll: function() {
            window.location.hash = this.hash;
          }
        });        
      }
      else {
        content.removeClass("relative"); 
        $('a.button').smoothScroll({
          offset: 500,
          afterScroll: function() {
            window.location.hash = this.hash;
          }
        });
      }
    });      
  });
});