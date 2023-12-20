// const { active } = require("d3");

let slideIndex = 1;
showSlides(slideIndex);  // slideIndex = 1

// Next/Previous Controls
function plusSlides(n){
    showSlides(slideIndex += n); // 1 = 1+1 or slideIndex = 2 ho gya
}
 
// thumbnail image controls
function currentSlides (n)
{
    showSlides(slideIndex = n);  // 1=1
}

function showSlides(n){
    let i ;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex =1}
    if(n < 1) {slideIndex = slides.length}
    for(i =0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for(i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}