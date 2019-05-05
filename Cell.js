class Cell {

	constructor(state, h, s, l, x, y) {

		this.state = state;
		this.h = h;
		this.s = s;
		this.l = l;
		this.x = x * cellSize;
		this.y = y * cellSize;
	}

	draw() {

		context.fillStyle = 'hsl(' + this.h + ' ,' + this.s + '% ,' + this.l + '%)';
		context.fillRect(this.x, this.y, cellSize - 1, cellSize - 1);
	}
}