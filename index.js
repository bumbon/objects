var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var myDog = {
  "name": "July",
  "legs": 4,
  "tails": 1,
  "friends":["Me", " Son", " Daughter"], 
   Hunter: "Doberman",
  "drink": "milk"
};

var nameOurDog = ourDog.name;     
var nameMyDog = myDog.name;

var drinkValue = myDog["drink"]; 

//alert(nameOurDog+" and "+nameMyDog +" drink "+drinkValue);
//an example of using a variable to access a property
var myDog_br = "Hunter";
var breeds = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
}
var breed = breeds[myDog_br];
//alert(breeds);// "Doberman"
//---------------------------
myDog_.onclick = function() {
  
  //prop.parentNode.removeChild(arr);
  for (var i in myDog) {
            console.log(i + " = " + myDog[i]);
                 var arr = document.createElement('p');
             
                 arr.innerHTML = i + "  -  " + myDog[i]+'<br>';
                 show.appendChild(arr);
                 }
            
};
//----------------------------------



clear.onclick = function(prop) {
	var myNode = document.getElementById('show');
	
  var fc = myNode.firstChild;
  while( fc ) {
    myNode.removeChild( fc );
    fc = myNode.firstChild;
     }
};
//--------------------------------

 function propLookup(val) {
      var result = "";
      result = myDog[val];
      return result;
}
about.onclick = function(){ alert(propLookup(prompt("Input wthat you want to know - name, drink, friends")));}


                                   
/*document.getElementById("myDog_").addEventListener("click",function {
        for (var i in myDog) {
            console.log("myDog." + i + " = " + myDog[i]);
            document.write(i+"="+myDog[i]+'<br>' );

			}
      });*/



