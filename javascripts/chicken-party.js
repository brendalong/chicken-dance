"use strict";

var Chicken = (function(originalChicken){

	let partyCrashers =["lion", "wolf"];

	originalChicken.sendInvites = function(){
		let inviteList = Chicken.getFriends().toString();
		console.log("Your Invited: ", inviteList);
	}

	originalChicken.getPartyCrashers = function(){
		return partyCrashers;
	}

	originalChicken.addPartyCrasher = function(who){
		partyCrashers.push(who.name);
		console.log("Lookout partyCrashers: ", partyCrashers.toString());
	}


	return originalChicken;

})(Chicken || {});