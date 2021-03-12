$(document).ready(function() {

//скрипт для блока service
var acc = document.getElementsByClassName("service-part");
var service_cursor = $(".service-cursor");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
     
    } else {
      panel.style.display = "block";
    }
 
  });

}



});