class Game {
	private started: boolean;
	private points: number;
	private round: number;

	constructor() {
		this.started = false;
		this.points = 0;
		this.round = 0;
	}

	public start(): void {
		$("#title").text("Simon Game");
		this.setStarted(true);
	}

	public stop() {
		game.setStarted(false);
	}

	public winMessage(): void {
		$("h1#title").text("Parabéns, você venceu!");
		$("button#start").text("Jogar novamente");
	}

	public loseMessage(): void {
		$("h1#title").text("Que pena, você perdeu.");
		$("button#start").text("Tentar novamente");
		this.setPoints(0);
		this.displayPoints();
	}

	public displayRound(): void {
		$("span#round").text(this.getRound());
	}

	public displayPoints(): void {
		$("span#points").text(this.getPoints());
	}

	public isStarted(): boolean {
		return this.started;
	}

	public getPoints(): number {
		return this.points;
	}

	public getRound(): number {
		return this.round;
	}

	public setStarted(started: boolean): void {
		this.started = started;
	}

	public setPoints(points: number): void {
		this.points = points;
	}

	public setRound(round: number): void {
		this.round = round;
	}
}
