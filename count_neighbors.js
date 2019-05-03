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

function get_max_color(grid, x, y){                      

  let colors_list = new Array();

  for (let i = -1; i < 2; i++) {                          
    for (let j = -1; j < 2; j++) {                        
      let col = (x + i + gridWidth) % gridWidth;          
      let row = (y + j + gridHeight) % gridHeight;

      if (grid[col][row].state == 1){

        colors_list.push(grid[col][row].color); 

      }     
    }
  }

  var color_count = new Array();

  for (var i = 0; i < colors_list.length; i++) {
    var num = colors_list[i];
    color_count[num] = color_count[num] ? color_count[num] + 1 : 1;
  }

  var max_color = Object.keys(color_count).reduce(function(a, b){ return color_count[a] > color_count[b] ? a : b })

  return max_color;

}