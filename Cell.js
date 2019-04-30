class Cell {

	constructor(state, color, x, y) {

		this.state = state;
		this.color = color;
		this.x = x * cellSize;
		this.y = y * cellSize;
	}

	draw() {

		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, cellSize - 1, cellSize - 1);
	}
}