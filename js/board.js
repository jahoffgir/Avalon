
// Sets the state to a blue/red background
function setQuestState() {
    var summaryOfQuest = localStorage.getItem("RESULT").split(",");
    for (var j = 0; j < summaryOfQuest.length; j++) {
        if (parseInt(summaryOfQuest[i]) === 1) {
            classList[j].src = "images/result/success.png";
        } else {
            classList[j].src = "images/result/fail.png";
        }
    }
}
