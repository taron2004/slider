const images = document.querySelectorAll(".container div");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let i = 0;
console.log(images)
const nextslide = () => {
        images[i].classList.remove('active');
        i++
        if(i === images.length){
            i = 0;
        }
        images[i].classList.add("active")
    }

setInterval(nextslide,3000)

next.addEventListener("click", nextslide)
  
prev.addEventListener("click", ()=>{
    images[i].classList.remove('active');
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].classList.add("active");
}
)