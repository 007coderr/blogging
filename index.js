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
// for image slider
var responsiveSlider = function() {

var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};

var nextSlide = function() {
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};

next.addEventListener("click", function() {
  nextSlide();
});

prev.addEventListener("click", function() {
  prevSlide();
});

setInterval(function() {
  nextSlide()
}, 8000);

};

window.onload = function() {
responsiveSlider();  
}
