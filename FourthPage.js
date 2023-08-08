var mybutton = document.getElementById("btn02");
var myimg = document.getElementById("m1");
var mybutton1 = document.getElementById("btn01")
var myimg1 = document.getElementById("m1");
var firstImg = myimg.src;
var ind = 0;
var img0 = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2d/ef/cb/pool--v4800505.jpg?w=700&h=-1&s=1";
var img1 = "https://prod2.bravebooking.net/clients/SV76920/media/photos/hotellocal/254304/El_Mouradi_Club_El_Kantaoui_80.jpg";
var img2 = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/12572832.jpg?k=26ce7336cff930d98caa599fa9f0456b89768e9b22421b3af7e890181ee12794&o=&hp=1";
var imgs = [img1, img2, img0];

mybutton.onclick = function() {
  if (ind === imgs.length) {
    myimg.src = firstImg;
    ind = 0;
  } else {
    myimg.src = imgs[ind];
  }
  ind = (ind + 1) % imgs.length; 
};


mybutton1.onclick = function() {
  if (ind === imgs.length) {
    myimg1.src = firstImg;
    ind = 0;
  } else {
    myimg1.src = imgs[ind];
  }
  ind = (ind - 1 + imgs.length) % imgs.length; 
};



var bookButton = document.getElementById("btn04");
var resetButton = document.getElementById("btn03");

function changeToBooked() {
  bookButton.textContent = "Booked";
  bookButton.disabled = true;
}

function resetButtonState() {
  bookButton.textContent = "Book Now";
  bookButton.disabled = false;
}

bookButton.addEventListener("click", changeToBooked);

resetButton.addEventListener("click", resetButtonState);