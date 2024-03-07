"use strict";
class Game {
    constructor() {
        this.started = false;
        this.points = 0;
        this.round = 0;
    }
    start() {
        $("#title").text("Simon Game");
        this.setStarted(true);
    }
    stop() {
        game.setStarted(false);
    }
    winMessage() {
        $("h1#title").text("Parabéns, você venceu!");
        $("button#start").text("Jogar novamente");
    }
    loseMessage() {
        $("h1#title").text("Que pena, você perdeu.");
        $("button#start").text("Tentar novamente");
        this.setPoints(0);
        this.displayPoints();
    }
    displayRound() {
        $("span#round").text(this.getRound());
    }
    displayPoints() {
        $("span#points").text(this.getPoints());
    }
    isStarted() {
        return this.started;
    }
    getPoints() {
        return this.points;
    }
    getRound() {
        return this.round;
    }
    setStarted(started) {
        this.started = started;
    }
    setPoints(points) {
        this.points = points;
    }
    setRound(round) {
        this.round = round;
    }
}
