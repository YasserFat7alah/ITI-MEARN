
/* 2- Try to Use Hide / Toggle Animation Using Mouse Enter Events. */
  $("#toggle-box").mouseenter(function () {
    $("#toggle-element").toggle(600);
  });


/* 3- Try to Use FadeIn / FadeOut Animation Using dblClick Events. */
   $("#fade-box").dblclick(function () {
    $("#fade-element").fadeToggle(800);
  });

/* 4- Try to Use SlideUp / SlideDown Animation Using Mouse Enter Events. */
     $("#slide-box").mouseenter(function () {
    $("#slide-element").slideToggle(600);
  });

/* 5- Try to Use Animation Method to Create Custom Animation Using Mouse Leave Events */
$("#animation-box").mouseleave(function () {
    $("#animation-element")
      .text("Animating...")
      .animate(
        { width: "200px", opacity: 0.5},
        1000
      )
      .animate(
        { width: "60%", opacity: 1 },
        800,
        function () {
          $(this).text("I will animate");
        }
      );
  });