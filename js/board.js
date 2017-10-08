function initBoard() {
    var counter = 0;
    localStorage.setItem("COUNTER", counter)
}

// Sets the state to a blue/red background
function setQuestState() {

    var summaryOfQuest = localStorage.getItem("RESULT");

    var classList = document.getElementsByClassName("quest-icon");
    console.log(classList);
    var a = parseInt(localStorage.getItem("COUNTER"));
    console.log(a)
    if (parseInt(summaryOfQuest) === 1) {
        classList[a].src = "images/result/success.png";
    } else {
        classList[a].src = "images/result/fail.png";
    }
    a++;
    localStorage.setItem("COUNTER", a);
    alert(calculateNumberOfPeople());
}

function stateContent(ele) {

}

function calculateNumberOfPeople() {
    var arr = localStorage.getItem("RULE").split(",");
    var amountOfPeople = arr[parseInt(localStorage.getItem("COUNTER"))];
    localStorage.setItem("NUMBER_OF_PLAYERS_PER_QUEST", amountOfPeople);
    // return amountOfPeople;
}
