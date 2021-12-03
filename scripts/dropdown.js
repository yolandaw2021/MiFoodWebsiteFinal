var ONE=0;
var TWO=0;
var THREE=0;
var FOUR=0;
var FIVE=0;
var SIX=0;

function dropdown(num, a, drop) {
  if (num){
    a.removeClass("hidden");
    drop.addClass("rotate");
  } else {
    a.addClass("hidden");
    drop.removeClass("rotate");
  }
}

$("#drop1").click(function() {
  ONE = (ONE+1) % 2;
  dropdown(ONE, $("#a1"), $("#drop1"));
});

$("#drop2").click(function() {
  TWO = (TWO+1) % 2;
  dropdown(TWO, $("#a2"), $("#drop2"));
});

$("#drop3").click(function() {
  THREE = (THREE+1) % 2;
  dropdown(THREE, $("#a3"), $("#drop3"));
});

$("#drop4").click(function() {
  FOUR = (FOUR+1) % 2;
  dropdown(FOUR, $("#a4"), $("#drop4"));
});

$("#drop5").click(function() {
  FIVE = (FIVE+1) % 2;
  dropdown(FIVE, $("#a5"), $("#drop5"));
});

$("#drop6").click(function() {
  SIX = (SIX+1) % 2;
  dropdown(SIX, $("#a6"), $("#drop6"));
});
