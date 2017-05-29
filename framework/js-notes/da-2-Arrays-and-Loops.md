ARRAYS
// Arrays starting element has position '0'
		First element in the array: junkData[0]
		Third element in the array: junkData[2]

// Syntax including 'length'
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
	console.log (languages[2]);
	console.log (languages.length);


// Heterogenous arrays


// Multidimensional arrays


// Jagged arrays





var names = ["Mao","Gandhi","Mandela"];
var sizes = [4, 6, 3, 2, 1, 9];
var mixed = [34, "candy", "blue", 11];

var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log (junkData[3]);

// Let's print out every element of an array using a for loop
		When calling on the entire array use [i]


var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Hong Kong", "Amman"];
for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

LOOPS

SYNTAX FOR ITERATIONS
i++
i--
i+=5
i-=3

FOR LOOP
for (var counter = 1; counter < 6; counter++) {
	console.log(counter);
}

for (var i = 1; i < 11; i = i + 1) {
	console.log(i);
}

for (var i = 1; i < 11; i++) {
	console.log(i);
}

for (var i = 10; i >= 0; i--) {
	console.log(i);
}

WHILE LOOP
// In situations where you don't know in advance when to stop looping, we can use a while loop.

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

//Declare variable, declare function, call function.

var count = 0;

var loop = function(){
	while(count < 3){
		console.log ("I'm looping!");
		count++;
	}
};
loop();

//Always have a condition that kills the loop

var myCondition = true;
var soloLoop = function(){
  //Your code goes here!
  while(myCondition){
    console.log ("Looped once!");
    myCondition = false;
  }
};
soloLoop();

DO WHILE

var loopCondition = false;
do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
	}
while (loopCondition);


// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
			}
		else {
      youHit = Math.floor(Math.random() * 2);
    }
  }
	else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}


CASE LOOP

var getReview = function (movie){
switch (movie) {
    case "Toy Story 2":
        return "Great story. Mean prospector.";
    case "Finding Nemo":
        return "Cool animation, and funny turtles.";
    case "The Lion King":
        return "Great songs.";
    default: "I don't know";
    }
};
getReview("The Lion King");


var lunch = prompt("What do you want for lunch?","Type your lunch choice here");
switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:js-tutorial-9
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
