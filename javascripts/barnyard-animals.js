"use strict";

var Barnyard = (function(originalBarnyard){

	let howManyAnimals = 0;

	originalBarnyard.getCount = function(){
		return howManyAnimals;
	};

	originalBarnyard.addCount = function(num){
		howManyAnimals += num;
	};
	
	
	howManyAnimals += Chicken.getChickens();
	console.log("howManyAnimals", howManyAnimals);


	return originalBarnyard;

})(Barnyard || {});