///////////////////////////// Carousel
const SLIDES = $(".slide");
var INDEX = 0;
const DOTS = $(".dot");

function showSlide(index) {
  let currentSlide = SLIDES.eq(index);
  let currentButton = DOTS.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");

  DOTS.removeClass("current-slide");
  currentButton.addClass("current-slide");

}

////////////////// click listeners
$("#left-button").click(function(){
  let NEW = (INDEX - 1) % SLIDES.length;
  INDEX = NEW;
  showSlide(INDEX);
});

$("#right-button").click(function(){
  let NEW = (INDEX + 1) % SLIDES.length;
  INDEX = NEW;
  showSlide(INDEX);
});

$("#dot1").click(function(){
  INDEX = 0;
  showSlide(INDEX);
});

$("#dot2").click(function(){
  INDEX = 1;
  showSlide(INDEX);
});

$("#dot3").click(function(){
  INDEX = 2;
  showSlide(INDEX);
});

$("#dot4").click(function(){
  INDEX = 3;
  showSlide(INDEX);
});

$("#dot5").click(function(){
  INDEX = 4;
  showSlide(INDEX);
});
