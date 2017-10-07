var NUMBER_OF_PLAYERS = 5;
var ALIASES = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"];

/*
Setup Implementation
*/
function getNumPlayers(){
	NUMBER_OF_PLAYERS=document.getElementById('players').value;
	console.log(NUMBER_OF_PLAYERS);
	if(NUMBER_OF_PLAYERS < 5){
		alert("NOT ENOUGH PLAYERS");
	}
}

function getSpecialCharacters(){

}

/*
Aliases Implementation
*/
function getAlias(){
	
}