"use strict";

var Chicken = (function(originalChicken){

	let numChickens = 5;

	originalChicken.getChickens = function(){
		return numChickens;
	}

	originalChicken.addChicken = function(){
		numChickens++;
	}
	
document.getElementById("message").innerHTML = `<strong>Chicken Object is in the DOM</strong>`;
	return originalChicken;

})(Chicken || {});