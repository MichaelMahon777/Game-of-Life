// tuning
var width = 1600;
var height = 900;
var zoom = 0;
var fps = 30;

var cellSize = 5;
var gridHeight = height / cellSize;
var gridWidth = width / cellSize;
	
// globals
var canvas;
var context;
var imageData;

next = Array();
cells = Array();

function initialize(){

	for (var i = 0; i < gridWidth; i++) {	
		
			next[i] = [];							

	  	for (var j = 0; j < gridHeight; j++) {

	  		next[i][j] = new Cell(0, "white", i, j);
	  	}
	}

	for (var i = 0; i < gridWidth; i++) {	
	
		cells[i] = [];							

  		for (var j = 0; j < gridHeight; j++) {

  			cells[i][j] = new Cell(get_random_binary(), "white", i, j);			// create array of cell objects
  		}
  	}

	cells[50][50].state = 1;									// seed colored cells			
	cells[50][50].color = "green";	

	cells[270][130].state = 1;									
	cells[270][130].color = "red";		

}

// graphics initialization
const createDrawSurfaces = () => {
	canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	context = canvas.getContext("2d");
	imageData = context.getImageData(0, 0, width, height);

	// add to document
	document.body.appendChild(canvas);
}

const redraw = () => {
	
	context.fillStyle = "black"; // <<-- customize clear/background color here
	context.fillRect(0, 0, width, height);

	for (i = 0; i < gridWidth; i++) {
		for (j = 0; j < gridHeight; j++) {

			if (cells[i][j].state == 1) {

				cells[i][j].draw();

			} 
		}
	}

	for (let i = 0; i < gridWidth; i++) {
    	for (let j = 0; j < gridHeight; j++) {
      		
      		let state = cells[i][j].state;
      		let sum = 0;
      		let neighbors = count_neighbors(cells, i, j);

			if (state == 0 && neighbors == 3) {
			
				next[i][j].state = 1;

			} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        		
        		next[i][j].state = 0;
        		
        	} else {
				
				next[i][j].state = state;
				
			}
		}
	}

	for (let i = 0; i < gridWidth; i++) {
    	for (let j = 0; j < gridHeight; j++) {

    		cells[i][j].state = next[i][j].state;
    	}
    }

	for (let i = 0; i < gridWidth; i++) {
    	for (let j = 0; j < gridHeight; j++) {
      		
    		let num_green = count_green(cells, i, j);
    		let num_red = count_red(cells, i, j);
    		let state = cells[i][j].state;

    		if (state == 1 && cells[i][j].color == "white" && (num_green > 0 || num_red > 0) && num_green > num_red){

    			cells[i][j].color = "green";
			
			} else if (state == 1 && cells[i][j].color == "white" && (num_green > 0 || num_red > 0) && num_red > num_green) {

				cells[i][j].color = "red";
			
			} else if (state == 1 && cells[i][j].color == "white" && (num_green > 0 || num_red > 0) && num_red == num_green) {

				let color = Math.floor(Math.random() * 2) + 1;  // random number 1 or 2

				if (color == 1) { 

					cells[i][j].color = "green"; 

				} else if (color == 2) { 

					cells[i][j].color = "red"; 

				}
			} 
    	}
    }
}

const loop = () => {
	
	redraw();
		
	// allow fps to be modified, using fps global var
	setTimeout(function() {
		requestAnimationFrame(loop);
	}, 1000 / fps);
}

/*
set canvas size to match window
this uses an off-screen canvas with your specified resolution to draw to
it then cleanly resizes and draws this to a second canvas in the browser window
this second canvas is set to the nearest clean multiple of your desired size
*/
const setSize = () => {
	console.log("setting size. base width = " + width + ", base height = " + height);
	console.log("window inner size is " + window.innerWidth + ", " + window.innerHeight);
	// how many times will this fit in horizontally?
	var zoomX = Math.floor(window.innerWidth / width);
	// vertically?
	var zoomY = Math.floor(window.innerHeight / height);
	// the window won't necessarily be a clean match to the shape of the offscreen canvas, so check to see whether width or height will be the limiting factor
	console.log("x / y zoom: " + zoomX + " / " + zoomY);
	// we pick the lower number here. that's how far we can scale up cleanly.
	zoom = Math.min(zoomX, zoomY);
	zoom = Math.max(1, zoom);
	
	// it would be neat to add borders to all canvasses
	canvas.style.borderWidth = zoom + "px";
	
	canvas.style.width = zoom * width + "px";
	canvas.style.height = zoom * height + "px";
	console.log("setting canvas width to " + canvas.style.width);
	console.log("setting canvas height to " + canvas.style.height);
		
	// resizing clears the canvas, so redraw contents
	// imageSmoothingEnabled doesn't work in firefox
	// use webkitImageSmoothingEnabled instead
	context.imageSmoothingEnabled = false; // don't interpolate
	context.mozImageSmoothingEnabled = false;
	context.webkitImageSmoothingEnabled = false;
	context.msImageSmoothingEnabled = false;

	redraw();

	console.log("--------------------------------");
}

const initializeGraphics = () => {
	createDrawSurfaces();
	setSize(); // run once at top, then on resize
	window.onresize = setSize;
}

// entry point
// when everything is loaded, set up and start running
window.onload = () => {
	initialize();
	initializeGraphics();	
	loop(); // calling the update loop once starts it running
}

