var counter = 0;
var aliases = [];
var sumAccept = 0;
var sumReject = 0;
var accrej = [];
/*
Setup Implementation
*/
function getNumPlayers(){
    var number = parseInt(document.getElementById('players').value)
	if(number< 5){
		alert("NOT ENOUGH PLAYERS");
        console.log(false);
        return false;
	}
	else{
        localStorage.setItem("NUMBER_OF_PLAYERS", parseInt(number));
        return true;
    }
}

function getCharacters(){
    var num = localStorage.getItem("NUMBER_OF_PLAYERS")
    var goodnum = Math.ceil(num/2);
    var badnum = num - goodnum;
    var goodCharacters = ["Merlin", "Percival"];
    var badCharacters = ["Assassin", "Morgana"];

    var servants = 1;
    while (goodCharacters.length < goodnum){
        var servant = "Loyal Servant of King Arthur " + servants;
        goodCharacters.push(servant);
        servants++;
    }

    var minions = 1;
    while (badCharacters.length < badnum){
        var minion = 'Minion of Mordred ' + minions;
        badCharacters.push(minion);
        minions++;
    }
    var selected = goodCharacters.concat(badCharacters);
    localStorage.setItem("CHARACTERS", selected);
}

/*
Aliases Implementation
*/
function getAlias(){
    aliases.push(document.getElementById('alias').value);
    document.getElementById("aliasForm").reset();
    document.getElementById('alias').focus();
	counter++;
	if (counter === parseInt(localStorage.getItem("NUMBER_OF_PLAYERS"))){
	    counter = 0;
	    localStorage.setItem("ALIASES", aliases);
        window.location.href="reveal.html";
        //assignCharacters();
    }
}
var users = [];
var charactersObjects = [];
/*
Reveal Implementation
*/

function assignCharacters() {
    var people = localStorage.getItem("ALIASES").split(",");
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

function assignAlias(){
    document.getElementById("player").innerHTML = users[counter].al;
}

function revealCharacter(){
    var user = users[counter];
    var char;
    for (var ele in charactersObjects){
        if (charactersObjects[ele].character === user.ch){
            char = charactersObjects[ele];
        }
    }

    document.getElementById("revealDiv").innerHTML = "";

    var image = document.createElement("img");
    image.setAttribute("id", "charImage");
    image.setAttribute("src", char.image);
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "charDesc");
    paragraph.innerHTML = char.desc;
    var button = document.createElement("div");
    button.setAttribute("class", "next-btn");
    button.setAttribute("onclick", "nextReveal()");
    button.innerHTML = "Next";

    document.getElementById("passDiv").appendChild(image);
    document.getElementById("passDiv").appendChild(paragraph);
    document.getElementById("passDiv").appendChild(button);
    document.getElementById("passDiv").appendChild(document.createElement("br"));


    counter++;
}

function nextReveal(){
    if (counter !== users.length) {
        document.getElementById("passDiv").innerHTML = "";
        var button = document.createElement("div");
        button.setAttribute("id", "reveal-btn");
        button.setAttribute("onclick", "revealCharacter()");
        button.innerHTML = "Reveal";

        document.getElementById("revealDiv").appendChild(button);
        assignAlias();
    }
    else {
        window.location.href = "recruitment.html";
    }
}

function getUsers(){

}

function getCharactersObjects(){
    return charactersObjects;
}
function whichAlias() {
    var pop = localStorage.getItem("ALIASES").split(",")
    if (sumAccept+sumReject <= 5) {
        var person = pop[sumReject + sumAccept - 1]
    } else {
        var person = pop[sumReject + sumAccept]
    }
    var classes = document.getElementsByClassName("aliasConfirm");
    classes[0].innerHTML = person;
}
function recordConfirmation(elem) {
    if (sumAccept+sumReject <= 4) {
        var classes = document.getElementsByClassName("summary");
        if (elem.textContent === "Approve") {
            classes[0].innerHTML = document.getElementsByClassName("aliasConfirm")[0].innerHTML + " person approved the quest";
            sumAccept++;
            accrej.push(1)
        } else {
            classes[0].innerHTML = document.getElementsByClassName("aliasConfirm")[0].innerHTML + " person rejected the quest";
            sumReject++;
            accrej.push(0)
        }
        localStorage.setItem("ACCREJ", accrej);
        whichAlias()
    }
}
