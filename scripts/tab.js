///////////////////////////// Carousel
const TABS = $(".tab");
var INDEX = 0;
const BUTTONS = $(".tab-button");

function showSlide(index) {
  INDEX = index;
  let currentTab = TABS.eq(index);
  let currentButton = BUTTONS.eq(index);

  TABS.addClass("hidden");
  currentTab.removeClass("hidden");

  BUTTONS.removeClass("current-slide");
  currentButton.addClass("current-slide");

}

////////////////// click listeners

$("#tab1").click(function(){
  showSlide(0);
});

$("#tab2").click(function(){
  showSlide(1);
});

$("#tab3").click(function(){
  showSlide(2);
});

$("#tab4").click(function(){
  showSlide(3);
});
