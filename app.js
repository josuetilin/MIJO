let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = Document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function(){
    showslider("next");  
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
     nextDom.click();
}, timeAutoNext); 


function showslider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll("carousel .thumbail .item");

    if (type === "next"){
         listItemDom.appendChild(itemSlider[0]);
         thumbnailDom.appendChild(itemThumbnail[0])
         carouselDom.classList.andd("next");
    }else{
        let positionLasItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLasItem]);
        thumbnailDom.prepend(itemThumbnail[positionLasItem]);
        carouselDom.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
       
    }, timeAutoNext);


    

    
}
