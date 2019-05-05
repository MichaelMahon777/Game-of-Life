
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

function get_random_h(){

	let rand_h = Math.random() * 361;

	return rand_h;

}

function get_random_s(){

	let rand_s = Math.random() * 101;

	return rand_s;

}

function get_random_l(){

	let rand_l = Math.random() * 101;

	return rand_l;

}

function random_ruleset(){

	let ruleset = new Array();

	for (let i = 0; i < 9; i++){

		ruleset.push(get_random_binary());

	}

	return ruleset;
}