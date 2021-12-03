var BOOL = 0;
const NAVTABS = $(".navtab");

if ($(window).width() < 800) {
  $("#hamburger").removeClass("hidden");
  if(BOOL) {
    $("#nav").removeClass("hidden");
    NAVTABS.removeClass("hidden");
    $("#nav").removeClass("row");
    $("#nav").addClass("col");
  } else {
    $("#nav").addClass("hidden");
    NAVTABS.addClass("hidden");
    $("#nav").removeClass("col");
    $("#nav").addClass("row");
  }
} else {
  $("#nav").removeClass("hidden");
  NAVTABS.removeClass("hidden");
  $("#hamburger").addClass("hidden");
  $("#nav").removeClass("col");
  $("#nav").addClass("row");
}

$(window).resize(function() {
  if ($(window).width() < 800) {
    $("#hamburger").removeClass("hidden");
    if(BOOL) {
      $("#nav").removeClass("hidden");
      NAVTABS.removeClass("hidden");
      $("#nav").removeClass("row");
      $("#nav").addClass("col");
    } else {
      $("#nav").addClass("hidden");
      NAVTABS.addClass("hidden");
      $("#nav").removeClass("col");
      $("#nav").addClass("row");
    }
  } else {
    $("#nav").removeClass("hidden");
    NAVTABS.removeClass("hidden");
    $("#hamburger").addClass("hidden");
    $("#nav").removeClass("col");
    $("#nav").addClass("row");
  }
});

$("#hamburger").click(function() {
  BOOL = (BOOL+1) % 2;
  if (BOOL){
    $("#nav").removeClass("hidden");
    NAVTABS.removeClass("hidden");
  } else {
    $("#nav").addClass("hidden");
    NAVTABS.addClass("hidden");
  }

});
//
// var DROP = 0;
// $("#nav-drop").hover(function() {
//   DROP = (DROP + 1) % 2;
//   if (DROP){
//     $("#nav-drop").addClass("current-slide")
//     $("#nav-faq").removeClass("hidden");
//     $("#nav-drop").addClass("rotate");
//   } else {
//     $("#nav-drop").removeClass("current-slide")
//     $("#nav-faq").addClass("hidden");
//     $("#nav-drop").removeClass("rotate");
//   }
// }, function() {
//   if (DROP){
//     $("#nav-drop").addClass("current-slide")
//     $("#nav-faq").removeClass("hidden");
//     $("#nav-drop").addClass("rotate");
//   } else {
//     $("#nav-drop").removeClass("current-slide")
//     $("#nav-faq").addClass("hidden");
//     $("#nav-drop").removeClass("rotate");
//   }
// });


$("#index-tab").hover(function() {
  $(".index-sub-tab").removeClass("hidden");
}, function() {
  $(".index-sub-tab").addClass("hidden");
})

$("#product-tab").hover(function() {
  $(".product-sub-tab").removeClass("hidden");
}, function() {
  $(".product-sub-tab").addClass("hidden");
})

$("#business-tab").hover(function() {
  $(".business-sub-tab").removeClass("hidden");
}, function() {
  $(".business-sub-tab").addClass("hidden");
})

$("#about-tab").hover(function() {
  $(".about-sub-tabs").removeClass("hidden");
}, function() {
  $(".about-sub-tab").addClass("hidden");
})

$("#contact-tab").hover(function() {
  $(".contact-sub-tabs").removeClass("hidden");
}, function() {
  $(".contact-sub-tab").addClass("hidden");
})
