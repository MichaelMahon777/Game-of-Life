
function get_random_dir(){

	var dir = (Math.floor(Math.random() * 3)) - 1; // generates random int of -1, 0 or 1

	return (dir * cellSize);

}

function get_random_x(){

	var loc_x = Math.floor(Math.random() * (gridWidth)); // generates random int from 0 (inclusive) to width (1600, exclusive)

	return loc_x;

}

function get_random_y(){

	var loc_y = Math.floor(Math.random() * (gridHeight)); // generates random int from 0 (inclusive) to height (900, exclusive)

	return loc_y;

}

function get_random_binary(){

	var random_binary = Math.floor(Math.random() * 2); // generates random int of 0 or 1

	return random_binary;

}

function get_random_color(){

	let random_color = ['red', 'yellow', 'orange'];

	let index = Math.floor(Math.random() * (random_color.length)); // generates int from 0 to random_color.length (4, exlusive)

	return random_color[index];
}