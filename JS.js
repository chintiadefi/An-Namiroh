/* Effect Animasi */ 
$(document).animateScroll();

/* Carousell */ 
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

/* Testimoni */ 
if  (window.matchMedia("(max-width: 992px)").matches) {
  $(document).on('ready', function() {
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 3
    });
  });
} else {
  $(document).on('ready', function() {
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  });
}

/* Pop Up */ 
var modal = document.getElementById("block");
var sendmail = document.getElementById("sendemail");
var blocka = document.getElementById("closeimage");
var blockb = document.getElementById("closeemail");

blocka.onclick = function() {
  modal.style.display = "none";
}

blockb.onclick = function() {
  sendmail.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == sendmail) {
    sendmail.style.display = "none";
  }
}