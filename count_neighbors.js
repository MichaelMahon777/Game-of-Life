function count_neighbors(grid, x, y){						// count all 8 neighbors around a square grid, at locaiton x, y

	let sum = 0;

	for (let i = -1; i < 2; i++) {							                // search x coordinates -1, 0 and +1
    	for (let j = -1; j < 2; j++) {						              // search y coordinates -1, 0 and +1
      		let col = (x + i + gridWidth) % gridWidth;		      // modulous allows wrapping to handle boundary conditions
      		let row = (y + j + gridHeight) % gridHeight;
      		sum += grid[col][row];
    	}
  	}
	sum -= grid[x][y];										// removes center cell from count
	return sum;
}

function count_green(grid, x, y){             // count all 8 neighbors around a square grid, at locaiton x, y

  let green_count = 0;

  for (let i = -1; i < 2; i++) {                              // search x coordinates -1, 0 and +1
      for (let j = -1; j < 2; j++) {                          // search y coordinates -1, 0 and +1
          let col = (x + i + gridWidth) % gridWidth;          // modulous allows wrapping to handle boundary conditions
          let row = (y + j + gridHeight) % gridHeight;
          
          if (grid[col][row].state == 1){

            green_count += 1;

          }          
      }
  }
  return green_count;
}

function count_red(grid, x, y){             // count all 8 neighbors around a square grid, at locaiton x, y

  let red_count = 0;

  for (let i = -1; i < 2; i++) {                              // search x coordinates -1, 0 and +1
      for (let j = -1; j < 2; j++) {                          // search y coordinates -1, 0 and +1
          let col = (x + i + gridWidth) % gridWidth;          // modulous allows wrapping to handle boundary conditions
          let row = (y + j + gridHeight) % gridHeight;
          
          if (grid[col][row].state == 2){

            red_count += 1;

          }          
      }
  }
  return red_count;
}