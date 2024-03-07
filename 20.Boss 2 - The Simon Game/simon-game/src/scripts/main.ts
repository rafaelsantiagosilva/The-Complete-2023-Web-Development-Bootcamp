/*
contar qual clique é
conto de clique correspondende a key do array
 */

/*
fazer um for para os correct squares e ir verificando,
se for diferente, break
*/
const game: Game = new Game();
let lose: boolean = false;
let randomID: string = "";
let correctSquares: string[] = [];
let clickedSquares: string[] = [];
let clickedTimes: number = 0;
let squares = document.getElementsByClassName("square");

$(document).ready(() => {
	$("button#start").click(function () {
		if (!game.isStarted()) {
			startGame();
			playGame();
		} else {
			stopGame(false);
		}
	});
});

function playGame(): void {
	if (game.isStarted()) {
		for (let i in squares) {
			let element = squares[i];

			$(`#${element.id}`).click(() => {
				flashColor(element.id);
				clickedSquares.push(element.id);
				console.log(
					"Are equals? " +
						(clickedSquares[clickedTimes] == correctSquares[clickedTimes])
				);
				console.log(
					"Type of them: \nClicked: " +
						clickedSquares[clickedTimes] +
						"\nCorrect: " +
						correctSquares[1]
				);

				// if (clickedSquares[clickedTimes] == correctSquares[clickedTimes]) {
				// 	clickedTimes++;
				// 	newRound();
				// }
			});
		}
	}
}

function startGame(): void {
	game.start();
	$("button#start").text("Parar");
	newRound();
	addCursorPointerToSquares();
	lose = false;
	correctSquares = [];
	clickedSquares = [];
	clickedTimes = 0;
}

function stopGame(lose: boolean): void {
	if (lose) {
		game.loseMessage();
	} else {
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

function verificationLose(): void {
	if (lose) {
		stopGame(lose);
	} else {
		newRound();
	}
}

function addCursorPointerToSquares(): void {
	for (let i in squares) {
		$(`#${squares[i].id}`).addClass("cursor-pointer");
	}
}

function removeCursorPointerFromSquares(): void {
	for (let i in squares) {
		$(`#${squares[i].id}`).removeClass("cursor-pointer");
	}
}

function flashColor(elementId: string = "") {
	let elementColor = elementId.slice(7);

	$(`#${elementId}`).removeClass(`bg-${elementColor}-500`);
	$(`#${elementId}`).addClass(`bg-${elementColor}-300`);

	setTimeout(() => {
		$(`#${elementId}`).removeClass(`bg-${elementColor}-300`);
		$(`#${elementId}`).addClass(`bg-${elementColor}-500`);
	}, 300);
}

function randomNumber(): number {
	return Math.ceil(Math.random() * 4);
}

function convertRandomNumberToSquareId(randomNumber: number): string {
	let squareId: string = "";

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

function changeRound(): void {
	if (game.getRound() < 10) {
		game.setRound(game.getRound() + 1);
		game.displayRound();
	} else {
		game.winMessage();
		game.stop();
		game.setRound(0);
	}
}

function newRound(): void {
	if (game.isStarted()) {
		randomID = "square-" + convertRandomNumberToSquareId(randomNumber());

		correctSquares.push(randomID);

		console.log("RandomID: " + randomID);
		console.log(
			"Last value in correct squares: " + correctSquares[correctSquares.length - 1]
		);
		console.log("Correct squares length: " + correctSquares.length);

		clickedTimes = 0;

		setTimeout(() => {
			flashColor(randomID);
		}, 400);

		changeRound();
	}
}
