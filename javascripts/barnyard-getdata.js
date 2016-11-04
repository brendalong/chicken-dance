"use strict";

var Barnyard = (function(originalBarnyard){

  let animalData = [];

  let dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener("load", dataRequestLoadComplete);
  dataRequest.addEventListener("error", dataRequestError);

  function dataRequestLoadComplete(event){
    console.log("Animal Data has loaded");
    var data = JSON.parse(event.target.responseText);
    showData(data);
  }

  function showData(itDontMatter){
    let listDiv = document.getElementById("all-animals");
    let whatever;
    for(whatever in itDontMatter) {
      let animalData = '';
      let animalItem = itDontMatter[whatever];
      animalData += "<div>";
      animalData += `<p> ${animalItem.name}: ${animalItem.type} </p>`
      animalData += "</div>";
      listDiv.innerHTML += animalData;
    }
  }

  function dataRequestError(event){
    console.log("DataRequest - Error", event.target.responseText);
  }

  originalBarnyard.getAllAnimals = function(){
    return animalData;
  }

  dataRequest.open("GET", "animals.json");
  dataRequest.send();

  return originalBarnyard;

})(Barnyard || {});


