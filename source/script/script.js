var oldScrollY = 0;
var nav = document.getElementsByClassName("nav");
var social__logo = document.getElementsByClassName("social__logo");
var social__wide = document.getElementsByClassName("social__wide");

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var dY = scrolled - oldScrollY;
  
  if ( dY > 0 ){
    nav[0].style.top ="0px"; //= "nav nav-bottom";
    social__logo[0].style.display = "none";
    social__wide[0].style.display = "none";
  } else {
    nav[0].style.top ="-100px";//nav.className = //"nav nav-top";
    social__logo[0].style.display = "block";
    social__wide[0].style.display = "block";
    //console.log(social__logo);
  }
  
  oldScrollY = scrolled;
}