// console.log("I am done with the jQuery CDN");
$(document).ready(function () {
  // Click event on h1
  //   $("h1").on("click", function () {
  //     $("h1").hide();
  //   });

  // Click event on p with class para1
  // $("p.para1").on("click", function () {
  //     $("p.para1").hide();
  // });

  // Click event on p using "this" keyword as a selector
  // $("p").on("click", function () {
  //     $(this).hide();
  // });

  // Click event on p logging the clicked element
  // $("p").on("click", function () {
  //     console.log("You clicked on p", this);
  // });

  // Click event on element with id "second"
  // $("#second").on("click", function () {
  //     // Your logic here
  // });

  // Click event on all elements
  // $("*").on("click", function () {
  //     console.log("I can click any element");
  // });

  //   Double click event on p
  $("p").on("dblclick", function () {
    alert("I just double-clicked the paragraph element");
  });

  // on method
  //   $("p").on({
  //     click: function () {
  //       console.log("click event triggered");
  //     },
  //     mouseleave: function () {
  //       console.log("mouse leave event triggered");
  //     },
  //   });

  //    hide and show
  //   $(".div1").hide(1000, function () {
  //     console.log("hided successfully");
  //   });
  //   $(".div1").show(1000, function () {
  //     console.log("showed successfully");
  //   });

  // toggle between hide and show
  $(".btn").on("click", function () {
    $(".div1").toggle(1000);
  });

  // slide and fadeout functions
  // animatte function check them if needed

  // to change field we can use use html text in jQuery
  // but if we wnat to chnage something in form field then we have to change it using .val
});
