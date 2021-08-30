$("#seta_scroll").hide();

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      $("#seta_scroll").show();

    } else {
      $("#seta_scroll").hide();
    }
  });
});

function SubirTopo(){
  $('html').animate({ scrollTop: 0},2000);
}