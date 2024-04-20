const groupImages = document.querySelectorAll(".image-carousel");
const arrayGroupImages = [...groupImages];
const prevCarousel = document.querySelector(".prev-carousel");
const nextCarousel = document.querySelector(".next-carousel");

let activeIndex = 0;

prevCarousel.addEventListener("click",()=>{
    activeIndex--;
    if(activeIndex<0){
        activeIndex = arrayGroupImages.length-1;
    }
    updateCarousel(activeIndex);
});

nextCarousel.addEventListener("click",()=>{
    activeIndex++;
    if(activeIndex >= arrayGroupImages.length){
        activeIndex=0;
    }
    updateCarousel(activeIndex);
});

setInterval(()=>{
    activeIndex++;
    if(activeIndex >= arrayGroupImages.length){
        activeIndex=0;
    }
    updateCarousel(activeIndex);
},4000);

const updateCarousel=(activeIndex) =>{
    for(let i=0;i<arrayGroupImages.length;i++){
        if(i===activeIndex){
            arrayGroupImages[i].classList.add("active-carousel-image");
        } else{
            arrayGroupImages[i].classList.remove("active-carousel-image");
        }
    }
};

