var canvas      = document.getElementById('game');
var ctx         = canvas.getContext('2d');
var board       = [8 , 16];
var colors      = ["green", "red" , "teal"];
var block_size  = 35;
var the_game;

canvas.setAttribute('width', board[0] * block_size + "px");
canvas.setAttribute('height', board[1] * block_size + "px");

window.onload = function(){
	the_game = new Game();
}