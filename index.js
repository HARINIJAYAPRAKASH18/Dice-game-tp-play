
var randomNumber1=Math.floor(Math.random()*6)+1;
alert(randomNumber1);
var randomNumber2=Math.floor(Math.random()*6)+1;
alert(randomNumber2);
//var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

//var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

//var image1 = document.querySelectorAll("img")[0];

//image1.setAttribute("src", randomImageSource);
var NumberImage="images/dice"+randomNumber1+".png"
var image1=document.querySelectorAll("img")[0].setAttribute("src", NumberImage);
var NumberImage="images/dice"+randomNumber2+".png"
var image2=document.querySelectorAll("img")[1].setAttribute("src", NumberImage);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="The match draws"
}