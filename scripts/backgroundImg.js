var backImg = ["assets/img/food1.jpg", "assets/img/food2.jpg", "assets/img/food3.jpg", "assets/img/food4.jpg", "assets/img/food5.jpg"];

var today = new Date();
var day = Math.floor(today/8.64e7);
document.getElementById('bg-img').style.backgroundImage = 'url('+backImg[day%5]+')';

var placeImg = ["assets/img/place1.jpg", "assets/img/place2.jpg", "assets/img/place3.jpg", "assets/img/place4.jpg", "assets/img/place5.jpg"];

var productivityImg = ["assets/img/productivity1.jpg", "assets/img/productivity2.jpg", "assets/img/productivity3.jpg", "assets/img/productivity4.jpg", "assets/img/productivity5.jpg"];

var cycle = 0;
var imgArray = [backImg, placeImg, productivityImg];

var changeImg = document.getElementById('imgBtn');

imgBtn.addEventListener('click', function changeImg()
{
    cycle = (cycle+1)%imgArray.length;
    document.getElementById('bg-img').style.backgroundImage = 'url('+imgArray[cycle][day%imgArray[cycle].length]+')';
});