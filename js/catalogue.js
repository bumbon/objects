var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1983,
    "formats": ["mp3", "8T", "LP" ],
    "gold": true
  },
  {
    "artist": "Michael Jackson",
    "title": "Earth",
    "release_year": 1973,
    "formats": ["CS", "8T", "LP" ],
    "gold": true
  }
];

// switch (artist) {
//     case 'case':
//         // code
//         break;
    
//     default:
//         // code
// }


function selProp() {
 // clearing   
	var myNode = document.getElementById('catalP');
    var fc = myNode.firstChild;
    while( fc ) {
    myNode.removeChild( fc );
    fc = myNode.firstChild;
     }

//--------------------------------
    
        var x = document.getElementById("catalProp").value;
    // document.getElementById("art").innerHTML=myMusic[x].artist;
    
//   var x = +document.getElementById("art").innerHTML;
  
  for (var i in myMusic[x]) {
                 var arr2 = document.createElement('p');
                 arr2.innerHTML = i + "  -  " + myMusic[x][i] +'<br>';
                 catalP.appendChild(arr2);
                 }
            
};
//---------------------------

// -----------------
artist.onclick = function() {
    // clearing   
	var myNode = document.getElementById('catalP');
    var fc = myNode.firstChild;
    while( fc ) {
    myNode.removeChild( fc );
    fc = myNode.firstChild;
     }
    
  var x = +document.getElementById("art").innerHTML;
  
  for (var i in myMusic[x]) {
                 var arr2 = document.createElement('p');
                 arr2.innerHTML = i + "  -  " + myMusic[x][i] +'<br>';
                 catalP.appendChild(arr2);
                 }
            
};
//------------------------------

//AccessNestedObjects
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
var cab = ourStorage.cabinet["top drawer"].folder2;  // "secrets"
//alert(cab);
ourStorage.desk.drawer; // "stapler"