var mybutton = document.getElementById("btn02");
var myimg = document.getElementById("m1");
var mybutton1 = document.getElementById("btn01")
var myimg1 = document.getElementById("m1");
var firstImg = myimg.src;
var ind = 0;
var img0 = "moevenpick-sousse-240417-v.jpg";
var img1 = "120700636.jpg";
var img2 = "1393099_v5.webp";
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
