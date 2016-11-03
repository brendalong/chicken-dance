


let friends = ["cow", "rooster", "horse"];

getFriends = function(){
	return friends;
}

addFriend = function(who){
	//anyone who wants to be a friend needs to be tested.
	if (who.herbivore){
		friends.push(who.name);
		console.log(who.name, "is now a friend");
	}else {
		console.log("No, no. ", who.name, "eats chicken.");
		Chicken.addPartyCrasher(who);
	}
}

//This will allow the fox to become a friend without checking with the chicken first.
//In the console, add fox to the friends array.

document.getElementById("message").innerHTML = `<strong>Bad Chicken is in the DOM</strong>`;