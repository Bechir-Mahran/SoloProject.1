var mybutton = document.getElementById("btn1");
var myimg = document.getElementById("img1");
var mybutton1 = document.getElementById("btn2")
var myimg1 = document.getElementById("img1")
var myLink = document.getElementById("btn0")
var firstImg = myimg.src;
var ind = 0;
var linksousse = "https://www.google.tn/maps/place/Sousse/@35.8283346,10.6180544,13z/data=!3m1!4b1!4m6!3m5!1s0x130275759ac9d10d:0x698e3915682cef7d!8m2!3d35.8245029!4d10.634584!16zL20vMDN5djZy?entry=ttu";
var img1 = "sousse.jpg";
var img2 = "sousse-shutterstock-560089576-625ea201ed633543934890.jpg";
var img3 = "Sousse-plage.jpg";
var img4 = "sousse-shutterstock-560089576-625ea201ed633543934890.jpg";
var img5 = "16441077.webp"
var imgs = [img1, img2, img3,img4,img5];

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
  

