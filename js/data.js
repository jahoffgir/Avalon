var merlin= {
	character:"Merlin",
	image:'images/servants/merlin.png',
	desc:'You are a Loyal Servant of Arthur fighting for Goodness. As Merlin, you are the only servant who know the agents of Evil, but must only speak of this in riddles. Your true identity must be kept a secret, for if your identity is revealed to the forces of Evil, the cause for Goodness is loss.'
}
var percival= {
	character:'Percival',
	image:'images/servants/percival.png',
	desc:"You are a Loyal Servant of Arthur fighting for Goodness. Your role is to protect the identity of Meril even if that means sacrificing yourself. The problem is you know who both Morgana and Meril are, but you don't know which player is Meril. Keeping Meril unknown to the powers of Evil, keeps him alive, and that is important for the mission of Goodness."
}
var servant1={
	character:'Loyal Servant of King Arthur',
	image:'images/servants/servant1.png',
	desc:"You are a Loyal Servant of Arthur fighting for Goodness. Stay true to the mission set forth by King Arthur, for that is important in succeeding in the cause."
}
var servant2= {
	character:'Loyal Servant of King Arthur',
	image:'images/servants/servant2.png',
	desc:'You are a Loyal Servant of Arthur fighting for Goodness. Stay true to the mission set forth by King Arthur, for that is important in succeeding in the cause.'
}
var servant3= {
	character:'Loyal Servant of King Arthur',
	image:'images/servants/servant3.png',
	desc:'You are a Loyal Servant of Arthur fighting for Goodness. Stay true to the mission set forth by King Arthur, for that is important in succeeding in the cause.'
}
var servant4= {
	character:'Loyal Servant of King Arthur',
	image:'images/servants/servant4.png',
	desc:'You are a Loyal Servant of Arthur fighting for Goodness. Stay true to the mission set forth by King Arthur, for that is important in succeeding in the cause.'
}
var servant5= {
	character:'Loyal Servant of King Arthur',
	image:'images/servants/servant5.png',
	desc:'You are a Loyal Servant of Arthur fighting for Goodness. Stay true to the mission set forth by King Arthur, for that is important in succeeding in the cause.'
}
var assassin= {
	character:'Assassin',
	image:'images/minions/assassin.png',
	desc:'You are a Minion of Mordred, an agent of Evil. But you must be as deceitful as you are Evil in order to keep your allegiances hidden. Making it too obvious that you are Evil could be a win to the cause for Goodness. However, as the assassin, even if Goodness wins the Battle, you can win the war for Evil. Once all the quests for the King have been completed, if Goodness succeeds, you can win it all for Evil. IF you can assassinate Meril. You have one chance. Good luck.'
}
var morgana= {
	character:'Morgana',
	image:'images/minions/morgana.png',
	desc:'You are a Minion of Mordred, an agent of Evil. But you must be as deceitful as you are Evil in order to keep your allegiances hidden. Making it too obvious that you are Evil could be a win to the cause for Goodness. Morgana has an important role to deceit Percival into thinking you are Meril. Good luck.'
}
var mordred = {
	character:'Mordred',
	image:'images/minions/mordred.png',
	desc:'You are a Minion of Mordred, an agent of Evil. But you must be as deceitful as you are Evil in order to keep your allegiances hidden. Making it too obvious that you are Evil could be a win to the cause for Goodness.'
}
var oberon = {
	character:'Oberon',
	image:'images/minions/oberon.png',
	desc:'You are a Minion of Mordred, an agent of Evil. But you must be as deceitful as you are Evil in order to keep your allegiances hidden. Making it too obvious that you are Evil could be a win to the cause for Goodness.'
}

var minion1= {
	character:'Minion of Mordred',
	image:'images/minions/minion1.png',
	desc: 'You are a Minion of Mordred, an agent of Evil. But you must be as deceitful as you are Evil in order to keep your allegiances hidden. Making it too obvious that you are Evil could be a win to the cause for Goodness.'
}
var minion2= {
	character:'Minion of Mordred',
	image:'images/minions/minion2.png',
	desc:'You are a Minion of Mordred, an agent of Evil. But you must be as deceitful as you are Evil in order to keep your allegiances hidden. Making it too obvious that you are Evil could be a win to the cause for Goodness.'
}
var minion3={
	character: 'Minion of Mordred',
	image: 'images/minions/minion3.png',
	desc: 'You are a Minion of Mordred, an agent of Evil. But your role is to cause confusion and chaos. You know of the other Evil players, but they do not know you. Keep in mind, however, Meril knows of you. It is your job to create chaos on both sides and uncover Merill. Good luck.'
}
var characters=[];
characters=[merlin,percival,servant1,servant2,servant3,servant4,servant5,
		    assassin,morgana,mordred,oberon,minion1,minion2,minion3,minion3];

function returnCharacters() {
	return	characters;
}
