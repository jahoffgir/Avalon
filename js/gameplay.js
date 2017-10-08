var users = localStorage.getItem("ALIASES").split(",");

function pickKing() {
    if (localStorage.getItem("KING") === null) {
        localStorage.setItem("KING", Math.floor(Math.random() * users.length));
    }
    else if (parseInt(localStorage.getItem("KING")) < users.length - 1) {
        localStorage.setItem("KING", parseInt(localStorage.getItem("KING")) + 1);
        }
    else {
        localStorage.setItem("KING", 0);
        }
}

function loadChoices(){
    var king = parseInt(localStorage.getItem("KING"));
    for(var i = 0; i < users.length; i++){
        var toAdd = document.createElement("input");
        toAdd.setAttribute("type", "checkbox");
        toAdd.setAttribute("class", "choice");
        toAdd.setAttribute("onClick", "handleChange(this)");
        toAdd.style.display = "inline";
        toAdd.style.minWidth = "16px";
        toAdd.value = i + 1;


        var label = document.createElement("label");
        label.innerHTML = users[i];
        label.appendChild(toAdd);
        //label.appendChild(document.createTextNode(users[i]));
        //label.style.wordWrap = "break-word";
        label.style.float = "left";

        //document.getElementById("options").appendChild(toAdd);
        //document.getElementById("options").innerHTML += users[i]
        //document.getElementById("options").appendChild(n);
        document.getElementById("options").appendChild(label);
    }
}

function loadAlias(){
    document.getElementById("player").innerHTML = users[localStorage.getItem("KING")];
}

var players = [];
var selected = 0;

function handleChange(box){
    if (box.checked === true) {
        if (selected < 3) {
            players.push(box.value);
            selected++;
        }
        else {
            box.checked = false;
        }
    }
    else {
        var index = players.indexOf(box.value);
        if (index > -1){
            players.splice(index,1);
        }
        selected --;
    }
}

function recruit(){
    localStorage.setItem("RECRUITED", players);
    window.location.href = "confirmation.html";
}
