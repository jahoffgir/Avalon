var users = getUsers();
var king = -1;

function pickKing() {
    if (king === -1){
        king = Math.floor(Math.random() * users.length);
    }
    else if (king === users.length - 1){
        king = 0;
    }
    else {
        king++;
    }
}

function recruit(){

}
