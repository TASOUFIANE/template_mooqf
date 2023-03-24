// const navLinks = document.querySelector(".nav-links");
// const uil = document.querySelector(".u");
// // console.log(uil);
// let click = 0;
// uil.addEventListener("click", (e) => {
//   // console.log(uil);
//   //   ++click;
//   // uil.classList.toggle("uil-bars");
//   // console.log(1);
//   // //   if (click == 1) {
//   // //     for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
//   // //       document.getElementsByTagName("div")[i].style.display = "inline";
//   // //       ++click;
//   // //     }
//   // //   } else {
//   // //     for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
//   // //       document.getElementsByTagName("div")[i].style.display = "none";
//   // //       click = 0;
//   // //     }
//   // //   }
//   uil.classList.toggle("uil-multiply");
//   navLinks.classList.toggle("nav-links-m");
//   navLinks.classList.toggle("mobile-menu");
// });

//mobile menu
const uil = document.querySelector(".u");
const navLinks = document.querySelector(".nav-links");
uil.addEventListener("click", (e) => {
  navLinks.classList.toggle("menu-mobile");
  uil.classList.toggle("uil-multiply");
  uil.classList.toggle("uil-bars");
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
