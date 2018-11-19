var a = 0;               // Holds random value for crystal a. Random hidden value between 1 - 12
var b = 0;               // Holds random value for crystal b. Random hidden value between 1 - 12
var c = 0;               // Holds random value for crystal c. Random hidden value between 1 - 12
var d = 0;               // Holds random value for crystal d. Random hidden value between 1 - 12
var randomScore = 0;     // Holds random score. Should be between 19 - 120
var playerScore = 0;     // Holds player score that will increase based on which crystal is chosen
var wins = 0;            // Wins counter
var losses = 0;          // Losses counter
var resultMsg = "";      // This will display either "You won!!!" or "You lost..."
var newgameMsg = "";
var audioWin = new Audio('./assets/audio/cheer.mp3');
var audioLoss = new Audio('./assets/audio/boo.mp3');
var audioButton = new Audio('./assets/audio/button.mp3');

a = Math.floor(Math.random() * (12 - 1 + 1) + 1);            // Math.floor(Math.random()*(max-min+1)+min)              
b = Math.floor(Math.random() * (12 - 1 + 1) + 1);
c = Math.floor(Math.random() * (12 - 1 + 1) + 1);
d = Math.floor(Math.random() * (12 - 1 + 1) + 1);
randomScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log("randomScore: ", randomScore);
playerScore = 0;
console.log("A: ", a); console.log("B: ", b); console.log("C: ", c); console.log("D: ", d);

function newGame() {
    a = Math.floor(Math.random() * (12 - 1 + 1) + 1);            // Math.floor(Math.random()*(max-min+1)+min)              
    b = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    c = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    d = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    randomScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    playerScore = 0;
    resultMsg = "";
    newgameMsg = "";
    console.log("A: ", a); console.log("B: ", b); console.log("C: ", c); console.log("D: ", d);
    console.log("randomScore: ", randomScore);
}

function clickCrystalA() {   // Create one function for each crystal
    audioButton.play();
    playerScore = playerScore + a;
    console.log(playerScore);
    $("#player-score").text(playerScore);
    $("#result-msg").text(resultMsg);
    $("#newgame-msg").text(newgameMsg);
    checkScores();
}

function clickCrystalB() {   // Create one function for each crystal
    audioButton.play();
    playerScore = playerScore + b;
    console.log(playerScore);
    $("#player-score").text(playerScore);
    $("#result-msg").text(resultMsg);
    $("#newgame-msg").text(newgameMsg);
    checkScores();
}

function clickCrystalC() {   // Create one function for each crystal
    audioButton.play();
    playerScore = playerScore + c;
    console.log(playerScore);
    $("#player-score").text(playerScore);
    $("#result-msg").text(resultMsg);
    $("#newgame-msg").text(newgameMsg);
    checkScores();
}

function clickCrystalD() {   // Create one function for each crystal
    audioButton.play();
    playerScore = playerScore + d;
    console.log(playerScore);
    $("#player-score").text(playerScore);
    $("#result-msg").text(resultMsg);
    $("#newgame-msg").text(newgameMsg);
    checkScores();
}

function checkScores() {     // This function will compare playerScore vs randomScore
    // If playerScore < randomScore, game continues
    if (playerScore > randomScore) {
        losses++;
        resultMsg = "You lost ... ";
        $("#result-msg").text(resultMsg);
        newgameMsg = "Click on any crystal to start a new game!";
        $("#newgame-msg").text(newgameMsg);
        $("#wins-msg").text(wins);
        $("#losses-msg").text(losses);
        audioLoss.play();
        newGame();
    }

    if (playerScore === randomScore) {
        wins++;
        resultMsg = "You won !!! ";
        $("#result-msg").text(resultMsg);
        newgameMsg = "Click on any crystal to start a new game!";
        $("#newgame-msg").text(newgameMsg);
        $("#wins-msg").text(wins);
        $("#losses-msg").text(losses);
        audioWin.play();
        newGame();
    }
}


$(document).ready(function () {
    $("#result-msg").text(resultMsg);

    $("#C-A")
        .click(function () { clickCrystalA(); })

    $("#C-B")
        .click(function () { clickCrystalB(); })

    $("#C-C")
        .click(function () { clickCrystalC(); })

    $("#C-D")
        .click(function () { clickCrystalD(); })
});


