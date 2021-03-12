$(document).ready(function() {


    var submenu_li = document.querySelectorAll(".submenu-li");
    var submenu = document.querySelectorAll(".submenu");

    var header_line = document.querySelector (".header-line");
    var header_nav = document.querySelector (".header-nav");
    var header_cursor = document.querySelector (".header-cursor");


header_line.addEventListener ("click", function() {
    header_nav.classList.toggle("header-active");
    header_line.classList.toggle("show-active");
    
});


/*
for (var i = 0; i < submenu_li.length; i++) {
    submenu_li[i].onclick = function(){
      header_cursor.classList.toggle("header-cursor__active");
      for (var a = 0; a < submenu.length; a++) {
      submenu[a].classList.toggle("submenu-active");
      
      }
    }
  }

  */

  

  header_cursor.addEventListener ("click", function() {
    for (var a = 0; a < submenu.length; a++) {
    submenu[a].classList.toggle("submenu-none");
}
header_cursor.classList.toggle("header-cursor__active");

});





});