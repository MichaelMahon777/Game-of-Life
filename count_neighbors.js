function count_neighbors(grid, x, y){						            // count all 8 neighbors around a square grid, at locaiton x, y

	let sum = 0;

	for (let i = -1; i < 2; i++) {							              // search x coordinates -1, 0 and +1
  	for (let j = -1; j < 2; j++) {						              // search y coordinates -1, 0 and +1
    		let col = (x + i + gridWidth) % gridWidth;		      // modulous allows wrapping to handle boundary conditions
    		let row = (y + j + gridHeight) % gridHeight;
    		sum += grid[col][row].state;
  	}
	}
	sum -= grid[x][y].state;										              // removes center cell from count
	return sum;
}

