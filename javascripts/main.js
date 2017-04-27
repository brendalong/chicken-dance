let button = document.getElementById("btn-checkobject");
button.addEventListener("click", introduceChicken);

let partybtn = document.getElementById("btn-partylist");
partybtn.addEventListener("click", Chicken.sendInvites);

let foxcrashbtn = document.getElementById("btn-foxcrash");
foxcrashbtn.addEventListener("click", function(){
	let foxObj = {name: "fox", type: "carnivore"};
	Chicken.addFriend(foxObj)});

let eaglebtn = document.getElementById("btn-eaglefriend");
eaglebtn.addEventListener("click", function(){
	let eagleObj = {name:"eagle", type: "carnivore"};
	Chicken.addFriend(eagleObj)
});


let rabbitbtn = document.getElementById("btn-rabbitfriend");
rabbitbtn.addEventListener("click", function(){
	let rabbitObj = {name: "rabbit", type: "herbivore"};
	Chicken.addFriend(rabbitObj)
});

let songbtn = document.getElementById("btn-addsong");
songbtn.addEventListener("click", function(){
	let song = "The Chicken in Black";
	Chicken.addSong(song)
});

let showbtn = document.getElementById("btn-showsongs");
showbtn.addEventListener("click", Chicken.getSongs);

let barnbtn = document.getElementById("btn-checkBarnyard");
barnbtn.addEventListener("click", function(){
	console.log("Barnyard: ", Barnyard)
});

function introduceChicken(){
	//start things rolling
	console.log("Chicken", Chicken);
};