class Cell {

	constructor(state, x, y) {

		this.state = state;
		this.x = x * cellSize;
		this.y = y * cellSize;
	}

	draw() {

		if (this.state == 1){

			context.fillStyle = "rgb(97, 153, 99)"; // sickly green
			context.fillRect(this.x, this.y, cellSize - 1, cellSize - 1);

		} else if (this.state == 2)  {

			context.fillStyle = "rgb(209, 64, 132)"; // rosey red
			context.fillRect(this.x, this.y, cellSize - 1, cellSize - 1);

		} else {

			context.fillStyle = "white";
			context.fillRect(this.x, this.y, cellSize - 1, cellSize - 1);

		}
	}
}