// Write your code here
let images = ["image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"];
let i = 0; //current image index

function back() {
    i--; 
    if (i < 0) {
        i = 0;
    }
    setImage();
}

function foward() {
    i++;
    if (i > images.length) {
        i = 0;
    }
    setImage();
}

function setImage() {
    let firstImage = document.getElementById("image1");
    return firstImage.setAttribute("src", "images/" + images[i]);
}
