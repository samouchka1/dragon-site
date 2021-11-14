let dragonButton = document.getElementsByClassName("dragon-info");

for (i = 0; i < dragonButton.length; i++) {
  dragonButton[i].addEventListener("click", function() {
    let panel = this.previousElementSibling;
    if (panel.style.opacity === "0") {
      panel.style.opacity = "1";
    } else {
      panel.style.opacity = "0";
    }
  });
}

/*=============================================================================================================*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var slides = document.getElementsByClassName("picSlides");
    if (n > slides.length) { 
        slideIndex = 1
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
slides[slideIndex-1].style.display = "block";
}