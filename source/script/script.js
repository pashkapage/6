var nav = document.getElementsByClassName("nav");
var social__logo = document.getElementsByClassName("social__logo");
var social__wide = document.getElementsByClassName("social__wide");

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if ( scrolled > 0 ){
    nav[0].style.top ="0px";
    social__logo[0].style.display = "none";
    social__wide[0].style.display = "none";
  } else {
    nav[0].style.top ="-100px";
    social__logo[0].style.display = "block";
    social__wide[0].style.display = "block";
  }
}

const checkbox = document.querySelector("input");
let menu = document.querySelector(".menu");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        console.log("checked");
    } else {
        console.log("unchecked");
    }
})