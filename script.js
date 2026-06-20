// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".hidden").forEach((el)=>{
observer.observe(el);
});

// Category Filter

function filterImages(category){

const images = document.querySelectorAll(".image");

images.forEach((img)=>{

if(category === "all"){
img.style.display = "block";
}

else if(img.classList.contains(category)){
img.style.display = "block";
}

else{
img.style.display = "none";
}

});

}