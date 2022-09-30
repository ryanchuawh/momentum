var backImg = ["assets/img/food1.jpg", "assets/img/food2.jpg", "assets/img/food3.jpg", "assets/img/food4.jpg", "assets/img/food5.jpg"];
var today = new Date();
var day = Math.floor(today/8.64e7);
document.getElementById('bg-img').style.backgroundImage = 'url('+backImg[day%5]+')';