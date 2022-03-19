// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = "30px";
  }
}
// for side nav 
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("navbar-right").style.marginRight = "200px";
    document.getElementById("logo").style.paddingLeft = "20%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("navbar-right").style.marginRight = "0";
    document.getElementById("logo").style.paddingLeft = "30%";
  }

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//slider js
$(document).ready(function(){
$(".b").click(function(){
    $(this).toggleClass("b");
    $(this).toggleClass("b-selected");
 });
});

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellalign: 'right',
  pageDots: false,
  groupCells: '20%',
  selectedAttraction: 0.03,
  friction: 0.15
});
var flkty = new Flickity( '.carousel', {
  // options
});
