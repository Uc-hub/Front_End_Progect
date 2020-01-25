var smallImg = document.getElementById("small-img")
var imgBox = document.getElementById("img-box")
var menuIcon = document.getElementById("btnIcon")
function onImage1(){
    smallImg.src = "images (1).jpeg";
}
function onImage2(){
    smallImg.src= "images (3).jpeg";
}
function onImage3(){
    smallImg.src = "images (4).jpeg";
}
function onImage4(){
    smallImg.src = "images.jpeg";
}

function imageSize(){
    if(imgBox.className == "small"){
        imgBox.className = "full";
        menuIcon.innerHTML = "&#9776";
    }
    else{
        imgBox.className = "small";
        menuIcon.innerHTML = "&#10006";
    }
}
function imageIsClicked(){
    imgBox.className = "full";
    menuIcon.innerHTML = "&#9776";

}