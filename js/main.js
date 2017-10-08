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

function getCharacters(){
    var selected = ["Assassin", "Merlin", "Morgana", "Percival", "Loyal Servant of King Arthur"];
    localStorage.setItem("CHARACTERS", selected);
}

/*
Aliases Implementation
*/
function getAlias(){
    aliases.push(document.getElementById('alias').value);
    document.getElementById("aliasForm").reset();
	counter++;
	if (counter.toString() === localStorage.getItem("NUMBER_OF_PLAYERS")){
	    counter = 0;
	    localStorage.setItem("ALIASES", aliases);
        window.location.href="reveal.html";
        //assignCharacters();
    }
}
var users;
var charactersObjects;
/*
Reveal Implementation
*/
function assignCharacters() {

  var people = localStorage.getItem("ALIASES").split(",");
  var bad = Math.floor(people.length/2);
  var good = Math.ceil(people.length/2);
  var characters = localStorage.getItem("CHARACTERS").split(",");
  var arrchar = [];
  for (var i = 0; i < people.length; i++) {
    var num = Math.floor(Math.random() * characters.length);
      arrchar.push(characters[num]);
      characters.splice(num, 1);
  }

  for (var j = 0; j < people.length; j++) {
    var thing = {
      al : people[j],
      ch : arrchar[j]
    };
    users.push(thing);
  }
  charactersObjects = returnCharacters();
}

function revealCharacter(){
    var user = users[counter];
    var char;
    for (var ele in charactersObjects){
        if (ele.character === user.ch){
            char = ele;
            alert(ele.character);
        }
    }
    var image = document.createElement("img");
    image.setAttribute("src", users[counter].character);

    counter++;
}
