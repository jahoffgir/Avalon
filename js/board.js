function initBoard() {
    localStorage.setItem("COUNTER", 0);
    var arrys = [];
    arrys.push("0");
    localStorage.setItem("IMAGEARR", arrys);
}

// Sets the state to a blue/red background
function setQuestState() {

    var summaryOfQuest = localStorage.getItem("RESULT");

    var classList = document.getElementsByClassName("quest-icon");

    var a = parseInt(localStorage.getItem("COUNTER"));
    alert("counter is " + a);
    var arr  = localStorage.getItem("IMAGEARR").split(",");

    if (a === 0) {
        arr[0] = "" + a;
    } else {
        arr.push("" + summaryOfQuest)
    }

    localStorage.setItem("IMAGEARR", arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "1") {
            classList[i].src = "images/result/success.png";
        } else {
            classList[i].src = "images/result/fail.png";
        }
    }
    a++;
    localStorage.setItem("COUNTER", a);
}

function stateContent(ele) {

}

function calculateNumberOfPeople() {
    var arr = localStorage.getItem("RULE").split(",");
    var amountOfPeople = arr[parseInt(localStorage.getItem("COUNTER"))];
    localStorage.setItem("NUMBER_OF_PLAYERS_PER_QUEST", parseInt(amountOfPeople));
    alert(amountOfPeople + "amount of people");
    // return amountOfPeople;
}
