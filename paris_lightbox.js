/*const bigImg = document.querySelector("#lightbox img");
const lightbox = document.querySelector("#lightbox");
const boxMax = document.querySelectorAll("#lightbox_mask");
const photoList = document.querySelectorAll(".fbox img");

for (let i = 0; i < photoList.length; i++ ) {
    photoList[i].addEventListener("click", show); 
}
bigImg.addEventListener("click", hide);

function show() {
    const thisSrc = this.getAttribute("src");
    let bigImgSrc = thisSrc.replace("small", "large");

    let thisAlt = this.getAttribute("alt");
   // let bigImgSrc = thisSrc.replace("small", "large");

    bigImg.setAttribute("src", bigImgSrc);
    //lightbox.setAttribute("alt", thisAlt);
    lightbox.style.display = "block";
boxMax.style.display = "block";
        
}
function hide() {
    lightbox.style.display = "none";
    boxMax.style.display = "none";
        
    }*/


    //all små billede
const smallImg = document.querySelectorAll(".fbox img");
const smallImgArray = Array.from("smallImg");

for (let i = 0; i > smallImg.length; i++) {
    smallImg[i].addEventListener("click", showLightbox);
    
}
    //addEventListener på små billede der kalder function der viser
    //lightbox-max
const lightbox_mask = document.querySelector("#lightbox_mask");
    //de store billede
const bigImg = document.querySelector("#lightbox img");
     //addEventListener på store billede
bigImg.addEventListener("click", hideLightbox);
//en function der viser
function showLightbox() {
    let smallSrc = this.getAttribute("src");
    let bigSrc = smallSrc.replace("small", "large");
    bigImg.setAttribute("src", bigSrc);
    index = smallImgArray.indexOf(this);
    lightbox_mask.style.display = "grid";

  
}
//en function der skjuler
function hideLightbox() {
    lightbox_mask.style.display = "none";
}


//pile..............
//pilene
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
let index;
//eventlistener på pilene
leftArrow.addEventListener("click", changePhoto);
rightArrow.addEventListener("click", changePhoto);
//function der skifter billede
function changePhoto() {
    if (this.getAttribute("id") === "right") {
        if (index < smaallImgArray.length-1) {
            index++; 
        }else{
            index = 0;
        }
        if (index > 0) {
            index--;
        }else{
            index = smaallImgArray.length - 1;
        }
    
    }
    console.log(index);
    let tempSrc = smallImgArray[index].getAttribute("src");
    let newSrc = tempSrc.replace("small", "lagre");
    bigImg.setAttribute("src", newSrc);
}