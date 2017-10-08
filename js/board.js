// list of quests that players went to.
var quests = [];

// Assigning people to go on quests and whether they were success/fail.
// @param lst - list of people attending the game
// @param bool - success/fail of the the quest
function goingOnQuest(lst, bool) {
    var quest = {
      attended : lst,
      bool : bool
    }
    quests.push(quest)
    localStorage.setItem("QUESTS", quests)
    alert(quests.length)
    setQuestState(quests.length, bool)
}

// Sets the state to a blue/red background
function setQuestState(num, bool) {
    var classList = document.getElementsByClassName("quest-icon");
    for (var j = 0; j < classList.length; j++) {
        if (j === num -1) {
            if (bool === 1) {
                classList[j].src = "images/result/success.png";
            } else {
                classList[j].src = "images/result/fail.png";
            }
        }
    }
}
