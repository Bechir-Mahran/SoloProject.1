var mybutton = document.getElementById("btn1");
var myimg = document.getElementById("img1");
var mybutton1 = document.getElementById("btn2")
var myimg1 = document.getElementById("img1")
var firstImg = myimg.src;
var ind = 0;
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
  