function redirectPage(){
    
    window.location = "Index2.html";
    
}

function showImage(){
    
    var image = document.getElementById("ipadimage");
    image.src = "5495360_sd.jpg";
}

function showImage1(){
    
    var image = document.getElementById("ipadimage");
    image.src = "5985600_sd.jpg";

}

function showImage2(){
    
    var image = document.getElementById("ipadimage");
    image.src = "5985609_sd.jpg";
   
}

function showImage5(){
    
    var image = document.getElementById("ipadimage");
    image.src = "5985609cv14d.jpg";

}

function showImage3(){
    
    var image = document.getElementById("ipadimage");
    image.src = "Image1.JPG";

}

function showbackImage(){
    var image = document.getElementById("ipadimage");
    image.src = "Image1.JPG";
    var image1 = document.getElementsByClassName("ipadimages")[0];
    image1.style.outline = "2px solid blue";
    var image2 = document.getElementsByClassName("ipadimages")[1];
    image2.style.outline = "2px solid White";
}

function showbackImage1(){
    var image = document.getElementById("ipadimage");
    image.src = "Image4.JPG"; 
    }


function showbackImage2(){
    var image = document.getElementById("ipadimage");
    image.src = "Image3.JPG";
}


function testFuntion(element){
 let elements = document.getElementsByClassName("ipadimages");
    for (let e of elements) {
         e.style.outline= "10px solid black";
    }
    element.style.outline = "10px solid red";
    var image = document.getElementById("ipadimage");
     image.src = element.src; 
}

function testFuntion(element){
 var elements = document.getElementsByClassName("ipadimages");
    for (let e of elements) {
         e.classList.remove("my-new-class");
    }
//    element.style.outline = "10px solid red";
    element.classList.add("my-new-class");
    var image = document.getElementById("ipadimage");
    image.src = element.src; 
}





