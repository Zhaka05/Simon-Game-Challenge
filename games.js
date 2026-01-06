let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100);
    
    let sound = new Audio("sounds/" + randomChosenColour + ".mp3");
    sound.play()
}
nextSequence();