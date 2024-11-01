"use strict";

const menuCloseBtn = document.querySelector(".menu-close");
menuCloseBtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.add("sidebar-hide");
});

const menuOpenBtn = document.querySelector(".menu-open");
menuOpenBtn.addEventListener("click", () => {
  console.log("clicked!");
  document.querySelector(".sidebar").classList.remove("sidebar-hide");
});
