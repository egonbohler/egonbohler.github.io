var $boxs = $("#parent > .box");
var $btns = $(".btn-blog").on("click", function() {
  
  var active = 
    $btns.removeClass("active")
      .filter(this)
      .addClass("active")
      .data("filter");
  
  $boxs
    .hide()
    .filter( "." + active )
    .fadeIn(300);

});