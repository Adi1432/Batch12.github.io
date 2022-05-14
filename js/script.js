$(function () {
  $(".vision-text").hide();
  $(".vision--textbox").click(function () {
    $(this).closest(".vision--textbox").find(".vision-text").slideToggle();
  });

  let companySlider = [
    [
      "img/com/capgemini.png",
      "img/com/hexagon.png",
      "img/com/hundai.png",
      "img/com/ibm.png",
      "img/com/infosys.png",
    ],
    [
      "img/com/Lti.png",
      "img/com/meda.png",
      "img/com/modak.png",
      "img/com/pwc.png",
      "img/com/tcs.png",
    ],
    [
      "img/com/techigai.png",
      "img/com/valuelabs.png",
      "img/com/veda.png",
      "img/com/wipro.png",
      "img/com/wns.png",
    ],
  ];
  let i = 0;
  function imageslider() {
    $("#img1").attr("src", companySlider[i][0]);
    $("#img2").attr("src", companySlider[i][1]);
    $("#img3").attr("src", companySlider[i][2]);
    $("#img4").attr("src", companySlider[i][3]);
    $("#img5").attr("src", companySlider[i][4]);
  }
  imageslider();

  $("#previous").click(function () {
    if (i === 0) {
      i = companySlider.length - 1;
    } else {
      i -= 1;
    }
    imageslider();
  });

  $("#next").click(function () {
    if (i === companySlider.length - 1) {
      i = 0;
    } else {
      i += 1;
    }
    imageslider();
  });
  function slider() {
    $current = $(".slider img.active");
    if ($current.length == 0) {
      $(".slider img:first-child").addClass("active");
    } else {
      $next = $current.removeClass("active").next();
      if ($next.length == 0) {
        $(".slider img:first-child").addClass("active");
      } else {
        $next.addClass("active");
      }
    }
  }
  setInterval(slider, 3000);
});
