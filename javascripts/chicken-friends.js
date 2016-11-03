"use strict";

var Chicken = (function(originalChicken){

	let friends = ["cow", "rooster", "horse"];

	originalChicken.getFriends = function(){
		return friends;
	}

	originalChicken.addFriend = function(who){
		//anyone who wants to be a friend needs to be tested.
		if (who.herbivore){
			friends.push(who.name);
			console.log(who.name, "is now a friend");
		}else {
			console.log("No, no. ", who.name, "eats chicken.");
			Chicken.addPartyCrasher(who);
		}
	}

	return originalChicken;

})(Chicken || {});