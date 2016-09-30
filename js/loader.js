$(window).load(function(){
  console.log("loaded");

  $('body div').wrap("<div class='panel'></div>");
  $('body').append("<div id='arr_left'><=</div><div id='arr_right'>=></div>");

  var panels_amount=$(".panel").length;
  var panel_i = 0;
  $(".panel").eq(panel_i).addClass("active");

  $('body').on('click', "#arr_left", function() {
    panel_i = panel_i-1;
    if(panel_i<0) {
      panel_i = panels_amount-1;
    }
    panel_show(panel_i);
  });
  $('body').on('click', "#arr_right", function() {
    panel_i = +panel_i+ +1;
    if(panel_i>=panels_amount) {
      panel_i = 0;
    }
    panel_show(panel_i);
  });

  function panel_show(i) {
    $(".panel.hidden").removeClass("hidden");
    $(".panel.active").addClass("hidden").removeClass("active");
    //$(".panel").hide();
    $(".panel").eq(i).addClass("active");
  }
});
