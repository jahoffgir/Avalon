var counter = 0;
var aliases = [];
/*
Setup Implementation
*/
function getNumPlayers(){
    var number = parseInt(document.getElementById('players').value)
	if(number< 5){
		alert("NOT ENOUGH PLAYERS");
	}
	else{
        localStorage.setItem("NUMBER_OF_PLAYERS", parseInt(number));
    }
}

function setupNext(){
    window.location.href = "alias.html";
}

function getSpecialCharacters(){

}

/*
Aliases Implementation
*/
function getAlias(){
    aliases.push(document.getElementById('alias').value);
    document.getElementById("aliasForm").reset();
	counter++;
	if (counter.toString() === localStorage.getItem("NUMBER_OF_PLAYERS")){
	    localStorage.setItem("ALIASES", aliases);
        window.location.href="reveal.html";
    }
}
