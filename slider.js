
let flag = 0;

function moveslides(x){
    flag = flag +x;
    moveSlides(flag);
}

moveSlides(flag)

function moveSlides(num){
    let slides = document.getElementsByClassName("slide");
    if(num > slides.length -1){
        flag = 0;
        num=0;
    }
    if(num < 0){
        flag = slides.length -1;
        num=slides.length -1;
    }
    for(let slide of slides){
        slide.style.display = "none";
    }
    slides[num].style.display = "block"   
}