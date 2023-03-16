var nav = document.getElementsByClassName("nav");
var social__logo = document.getElementsByClassName("social__logo");
var social__wide = document.getElementsByClassName("social__wide");
const checkbox = document.querySelector("input");
let menu = document.querySelector(".menu");
let links = document.querySelectorAll(".menu > a");
let burger__toogle = document.querySelector("#burger__toogle");

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

checkbox.addEventListener("change", function () {
    if (this.checked) {
        links.forEach(element => {
          element.onclick = function(){
            menu.style.left = "-100%";
            menu.style.left="";
            burger__toogle.checked = false;
          }
        });
    } 
})