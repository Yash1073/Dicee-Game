var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomnumber1 + ".png";
var randomImageSource =  + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "dice" + randomnumber2 + ".png";
var randomImageSource1 =  + randomimage1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource1);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "⛳Play 1 wins!";
}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "play 2 wins!⛳";
}
else {
    document.querySelector("h1").innerHTML = "Match Tied";
}
