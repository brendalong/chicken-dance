var Chicken = (function(originalChicken){

	let chickenSongs = ["Chicken Strut", "Funky Chicken", "Chicken Fried"];

	originalChicken.getSongs = function(){
		let songlist = chickenSongs;
		console.log("Party Play List: ", songlist.toString());
	}

	originalChicken.addSong = function(what){
		chickenSongs.push(what);
	}

	return originalChicken;

})(Chicken || {});