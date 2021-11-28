var flowTimer1, flowTimer2, flowTimer3;
var t1 = 0;
var t2 = 0;
var t3 = 0;
var red = 0,
  blue = 0,
  green = 0;

$("#tapstart1").click(function () {
  if (t1 === 0) {
    t1 = 1;

    $("#redcolor").animate(
      {
        top: "+=400",
      },
      20000
    );
    flowTimer1 = setInterval(setRedColor, 1000);
    changeFlow1(255);
  } else if (t1 === 1) {
    t1 = 0;
    changeStyle();
  }
});
function setRedColor() {
  $("#tapstart1").attr("src", "redtap.jpg");
  var color1 = $("#redcolor").css("top").split("px");
  $(".redflow").css("display", "block");
  if (color1[0] >= 350) {
    changeStyle();
  }
}
function changeStyle() {
  $("#tapstart1").attr("src", "water-tap.jpg");
  clearInterval(flowTimer1);
  $("#redcolor").stop();
  $(".redflow").css("display", "none");
  $(".flowWater").stop();
}
function changeFlow1(a) {
  red = a;
  blue = blue - 50;
  green = green - 50;
  flow(red, blue, green);
}
function changeFlow2(b) {
  blue += b;
  red = red - 50;
  green = green - 50;
  flow(red, blue, green);
}
function changeFlow3(c) {
  green += c;
  red = red - 50;
  blue = blue - 50;
  flow(red, blue, green);
}
function flow(r, g, b) {
  console.log(r, g, b);
  $(".flowWater").animate(
    {
      bottom: "+=20",
    },
    20000
  );

  setTimeout(
    () => $(".flowWater").css("background-color", `rgb(${r}, ${b}, ${g})`),
    2000
  );
}

///yellow-color
$("#tapstart2").click(function () {
  if (t2 === 0) {
    t2 = 1;

    $("#yellowcolor").animate(
      {
        top: "+=400",
      },
      20000
    );
    flowTimer2 = setInterval(setYellowColor, 1000);
    changeFlow2(255);
  } else if (t2 === 1) {
    t2 = 0;
    changeYellowStyle();
  }
});

function setYellowColor() {
  $("#tapstart2").attr("src", "bluetap.jpg");
  var color2 = $("#yellowcolor").css("top").split("px");
  $(".yellowflow").css("display", "block");
  if (color2[0] >= 350) {
    changeYellowStyle();
  }
}
function changeYellowStyle() {
  $("#tapstart2").attr("src", "water-tap.jpg");
  clearInterval(flowTimer2);
  $("#yellowcolor").stop();
  $(".yellowflow").css("display", "none");
  $(".flowWater").stop();
  $(".yellowflow").css("display", "none");
}

///green-color
$("#tapstart3").click(function () {
  if (t3 === 0) {
    t3 = 1;
    $("#greencolor").animate(
      {
        top: "+=400",
      },
      20000
    );
    flowTimer3 = setInterval(setGreenColor, 1000);
    changeFlow3(255);
  } else if (t3 === 1) {
    t3 = 0;
    changegreenStyle();
  }
});

function setGreenColor() {
  $("#tapstart3").attr("src", "greentap.jpg");
  var color3 = $("#greencolor").css("top").split("px");
  $(".greenflow").css("display", "block");
  if (color3[0] >= 350) {
    changegreenStyle();
  }
}
function changegreenStyle() {
  $("#tapstart3").attr("src", "water-tap.jpg");
  clearInterval(flowTimer3);
  $("#greencolor").stop();
  $(".greenflow").css("display", "none");
  $(".flowWater").stop();
}
