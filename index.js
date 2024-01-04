var randoNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "Images/dice" + randoNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randoImage2 = "Images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randoImage2);

winner_display = document.querySelector('h1')

if (randoNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "It's a Tie !!!";
}
else if(randoNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins !";
    document.getElementById('p_turn1').style.visibility = 'visible';
    document.getElementById('p_turn2_2').removeAttribute('onclick');

}
else if(randoNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 wins !";
    document.getElementById('p_turn2').style.visibility = 'visible';
    document.getElementById('p_turn1_1').removeAttribute('onclick');
};