var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

});
// window.onscroll = function showHeader(){
//   var header = document.querySelector('.header')
//   if(window.pageYOffset > 200){
//     header.classList.add('.header.fixed');
//   }
// };
$(document).ready(function(){
  $('.nav__togle').click(function(event){
    $('.nav__togle, .nav, .header').toggleClass('active');

  });
});


$(function () {

  var header = $("#header");
    scrollOffset = $(window).scrollTop();
    topH = $("#top").innerHeight();
    checkScroll(scrollOffset);

  $(window).on("scroll", function () {

    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {


    if (scrollOffset >= topH) {
      header.addClass("fixed");

    }
    else {
      header.removeClass("fixed");

    };


  }

});

// // $(function () {

// //   var history = $("#history"),
// //     historyTop = $("#back").innerHeight(),
// //     scrollOffset = $(window).scrollTop();

// //   checkScroll(scrollOffset);
// //   $(window).on("scroll", function () {

// //     scrollOffset = $(this).scrollTop();
// //     scroll(scrollOffset);

// //   });
// //   function scroll(scrollOffset) {
// //     if (scrollOffset >= historyTop) {
// //       history.addClass("fixed");
// //     }
// //     else {
// //       history.removeClass("fixed");
// //     };

// //   }



// // })



// const link = document.querySelector("menu__link");
// link.addEventListener("click", () => {
//   link.classList.toggle("active");
// });

// // const burger = document.querySelector(".nav__togle");
// // const menu = document.querySelector(".nav");
// // const header = document.querySelector(".header");
// // const menuLinks= document.querySelector(".menu__item");

// // burger.addEventListener("click", () => {
// //   menu.classList.toggle("active");
// //   burger.classList.toggle("active");
// //   header.classList.toggle("active");
// // });

// // menuLinks.forEach((link) =>
// //   link.addEventListener("click", () => {
// //     menu.classList.remove("active");
// //     burger.classList.remove("active");
// //     header.classList.remove("active");
// //   })
// // );

// $(".nav__togle").on("click", function () {
//   $(this).toggleClass("active");
//   $(".nav").toggleClass("active");
// })


// document.querySelector('.nav__togle').addEventListener('click', function (_e) {
//   this.classList.toggle("active");

//   if (!this.classList.contains("active")) this.classList.remove("active");
// });


// // let burger = document.querySelector('.nav__togle'),
// //     menu = document.querySelector('.nav');
// //     header = document.querySelector(".header");

// //     burger.addEventListener('click', function (e) {
// //     menu.classList.toggle('active');
// //     header.classList.toggle('active');
// // });
// $(document).ready(function () {
//   $('.nav__togle').click(function (event) {
//     $('header', '.nav', '.nav__togle').toggleClass('active');

//   })
// })




// const links = document.querySelectorAll('list__link');

// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function (e) {
//     var el = document.querySelector(this.hash);
//     if (el) {
//       window.scrollTo(0, el.getBoundingClientRect().top - 20);
//     }
//     e.preventDefault();
//   }, false);
// }
// const profile = document.querySelectorAll('profile__link');

// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function (e) {
//     var el = document.querySelector(this.hash);
//     if (el) {
//       window.scrollTo(0, el.getBoundingClientRect());
//     }
//     e.preventDefault();
//   }, false);
// };



var modal = document.getElementsByClassName("state__modal");

// Get the button that opens the modal
var state = document.getElementById("state");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
state.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};






