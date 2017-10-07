var NUMBER_OF_PLAYERS = 5;
var ALIASES;
var playerCounter=0;

/*
Setup Implementation
*/
function getNumPlayers(){
	NUMBER_OF_PLAYERS = document.getElementById('players').value;
	console.log(NUMBER_OF_PLAYERS);
	if(NUMBER_OF_PLAYERS < 5){
		alert("NOT ENOUGH PLAYERS");
	}
	ALIASES = new Array(NUMBER_OF_PLAYERS);
}

function getSpecialCharacters(){

}

/*
Aliases Implementation
*/
function getAlias(){
	ALIASES[playerCounter] = document.getElementById('alias').value;
	playerCounter++;
	aliasNext();
}
function aliasNext(){
	
}