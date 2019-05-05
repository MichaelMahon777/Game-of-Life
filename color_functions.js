function get_average_h(grid, x, y){                     

  let sum = 0;
  let count = 0;

  for (let i = -1; i < 2; i++) {                            
    for (let j = -1; j < 2; j++) {                         
        let col = (x + i + gridWidth) % gridWidth;         
        let row = (y + j + gridHeight) % gridHeight;

        sum += grid[col][row].h;
        count += 1;
    }
  }
  
  average_h = sum / count;
  return average_h;
}

function get_average_s(grid, x, y){                     

  let sum = 0;
  let count = 0;

  for (let i = -1; i < 2; i++) {                            
    for (let j = -1; j < 2; j++) {                         
        let col = (x + i + gridWidth) % gridWidth;         
        let row = (y + j + gridHeight) % gridHeight;

        sum += grid[col][row].s;
        count += 1;
    }
  }
  
  average_s = sum / count;
  return average_s;
}

function get_average_l(grid, x, y){                     

  let sum = 0;
  let count = 0;

  for (let i = -1; i < 2; i++) {                            
    for (let j = -1; j < 2; j++) {                         
        let col = (x + i + gridWidth) % gridWidth;         
        let row = (y + j + gridHeight) % gridHeight;

        sum += grid[col][row].l;
        count += 1;
    }
  }
  
  average_l = sum / count;
  return average_l;
}

function get_max_h(grid, x, y){                      

  let h_list = new Array();

  for (let i = -1; i < 2; i++) {                          
    for (let j = -1; j < 2; j++) {                        
      let col = (x + i + gridWidth) % gridWidth;          
      let row = (y + j + gridHeight) % gridHeight;

      if (grid[col][row].state == 1){

        h_list.push(grid[col][row].h); 

      }     
    }
  }

  var h_count = new Array();

  for (var i = 0; i < h_list.length; i++) {
    var num = h_list[i];
    h_count[num] = h_count[num] ? h_count[num] + 1 : 1;
  }

  var max_h = Object.keys(h_count).reduce(function(a, b){ return h_count[a] > h_count[b] ? a : b })

  return max_h;

}

function get_max_s(grid, x, y){                      

  let s_list = new Array();

  for (let i = -1; i < 2; i++) {                          
    for (let j = -1; j < 2; j++) {                        
      let col = (x + i + gridWidth) % gridWidth;          
      let row = (y + j + gridHeight) % gridHeight;

      if (grid[col][row].state == 1){

        s_list.push(grid[col][row].s); 

      }     
    }
  }

  var s_count = new Array();

  for (var i = 0; i < s_list.length; i++) {
    var num = s_list[i];
    s_count[num] = s_count[num] ? s_count[num] + 1 : 1;
  }

  var max_s = Object.keys(s_count).reduce(function(a, b){ return s_count[a] > s_count[b] ? a : b })

  return max_s;

}

function get_max_l(grid, x, y){                      

  let l_list = new Array();

  for (let i = -1; i < 2; i++) {                          
    for (let j = -1; j < 2; j++) {                        
      let col = (x + i + gridWidth) % gridWidth;          
      let row = (y + j + gridHeight) % gridHeight;

      if (grid[col][row].state == 1){

        l_list.push(grid[col][row].l); 

      }     
    }
  }

  var l_count = new Array();

  for (var i = 0; i < l_list.length; i++) {
    var num = l_list[i];
    l_count[num] = l_count[num] ? l_count[num] + 1 : 1;
  }

  var max_l = Object.keys(l_count).reduce(function(a, b){ return l_count[a] > l_count[b] ? a : b })

  return max_l;

}

// function get_max_color(grid, x, y){                      

//   let colors_list = new Array();

//   for (let i = -1; i < 2; i++) {                          
//     for (let j = -1; j < 2; j++) {                        
//       let col = (x + i + gridWidth) % gridWidth;          
//       let row = (y + j + gridHeight) % gridHeight;

//       if (grid[col][row].state == 1){

//         colors_list.push(grid[col][row].color); 

//       }     
//     }
//   }

//   var color_count = new Array();

//   for (var i = 0; i < colors_list.length; i++) {
//     var num = colors_list[i];
//     color_count[num] = color_count[num] ? color_count[num] + 1 : 1;
//   }

//   var max_color = Object.keys(color_count).reduce(function(a, b){ return color_count[a] > color_count[b] ? a : b })

//   return max_color;

// }
