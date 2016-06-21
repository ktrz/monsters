import {Game} from "./game";

$(document).ready(function () {
	var n = 5, m = 5;
	var nInput = $('#nValue');
	var mInput = $('#mValue');
	var game;
	nInput.val(n);
	mInput.val(m);
	nInput.on('input', function () {
		n = nInput.val();
	});
	mInput.on('input', function () {
		m = mInput.val();
	});
	$('#start').on('click', function () {
		$('#board').html('');
		game = new Game(n, m);
		game.start();
	});
	$('#next').on('click', function () {
		$('#board').html('');
		game.updateGame();
	});
})