"use strict";
const game = new Game();
let lose = false;
let randomID = "";
let correctSquares = [];
let clickedSquares = [];
let clickedTimes = 0;
let squares = document.getElementsByClassName("square");
$(document).ready(() => {
    $("button#start").click(function () {
        if (!game.isStarted()) {
            startGame();
            playGame();
        }
        else {
            stopGame(false);
        }
    });
});
function playGame() {
    if (game.isStarted()) {
        for (let i in squares) {
            let element = squares[i];
            $(`#${element.id}`).click(() => {
                flashColor(element.id);
                clickedSquares.push(element.id);
                console.log("Are equals? " +
                    (clickedSquares[clickedTimes] == correctSquares[clickedTimes]));
                console.log("Type of them: \nClicked: " +
                    clickedSquares[clickedTimes] +
                    "\nCorrect: " +
                    correctSquares[1]);
            });
        }
    }
}
function startGame() {
    game.start();
    $("button#start").text("Parar");
    newRound();
    addCursorPointerToSquares();
    lose = false;
    correctSquares = [];
    clickedSquares = [];
    clickedTimes = 0;
}
function stopGame(lose) {
    if (lose) {
        game.loseMessage();
    }
    else {
        $("button#start").text("Começar");
    }
    game.stop();
    game.setRound(0);
    game.displayRound();
    correctSquares = [];
    clickedSquares = [];
    clickedTimes = 0;
    removeCursorPointerFromSquares();
}
function verificationLose() {
    if (lose) {
        stopGame(lose);
    }
    else {
        newRound();
    }
}
function addCursorPointerToSquares() {
    for (let i in squares) {
        $(`#${squares[i].id}`).addClass("cursor-pointer");
    }
}
function removeCursorPointerFromSquares() {
    for (let i in squares) {
        $(`#${squares[i].id}`).removeClass("cursor-pointer");
    }
}
function flashColor(elementId = "") {
    let elementColor = elementId.slice(7);
    $(`#${elementId}`).removeClass(`bg-${elementColor}-500`);
    $(`#${elementId}`).addClass(`bg-${elementColor}-300`);
    setTimeout(() => {
        $(`#${elementId}`).removeClass(`bg-${elementColor}-300`);
        $(`#${elementId}`).addClass(`bg-${elementColor}-500`);
    }, 300);
}
function randomNumber() {
    return Math.ceil(Math.random() * 4);
}
function convertRandomNumberToSquareId(randomNumber) {
    let squareId = "";
    switch (randomNumber) {
        case 1:
            squareId = "red";
            break;
        case 2:
            squareId = "blue";
            break;
        case 3:
            squareId = "yellow";
            break;
        case 4:
            squareId = "green";
            break;
    }
    return squareId;
}
function changeRound() {
    if (game.getRound() < 10) {
        game.setRound(game.getRound() + 1);
        game.displayRound();
    }
    else {
        game.winMessage();
        game.stop();
        game.setRound(0);
    }
}
function newRound() {
    if (game.isStarted()) {
        randomID = "square-" + convertRandomNumberToSquareId(randomNumber());
        correctSquares.push(randomID);
        console.log("RandomID: " + randomID);
        console.log("Last value in correct squares: " + correctSquares[correctSquares.length - 1]);
        console.log("Correct squares length: " + correctSquares.length);
        clickedTimes = 0;
        setTimeout(() => {
            flashColor(randomID);
        }, 400);
        changeRound();
    }
}
