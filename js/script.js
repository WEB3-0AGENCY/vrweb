/* IS NAVBAR ITEM ACTIVE? */

const navLinks = document.querySelectorAll(".nav-item");

const handleClick = (e) => {
  navLinks.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

navLinks.forEach((item) => {
  item.addEventListener("click", handleClick);
});

/* NAVBAR COLOR IF ACTIVE */
var navBar = document.querySelector('.navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
        navBar.classList.remove("mt-5");
    } 
    else {
        navBar.classList.add("nav-transparent");
        navBar.classList.remove("nav-colored");
        navBar.classList.add("mt-5");
    }
};