Prompt
prompt("Are you ready to play");

IF-ELSE

var age = prompt("What is your age?");
if(age < 13) {
  consoloe.log ("You can play but I take no responsibility");
  }
else {
  console.log ("Play away");
  }

var userAnswer = prompt("Do you want to race Biber on stage?");
if(userAnswer === "Yes") {
  console.log ("You and Bieber start racing, It's neck and neck! You win by a shoelace");
  }
else {
  console.log ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
  }

var feedback = prompt("Hows my game out of 10?");
if(feedback > 8) {
    console.log ("Thank you! We should race at the neixt concert!");
    }
else {
    console.log ("I'll keep practising coding and racing.");
    }

FUNCTION

var divideByThree = function (number) {
    var value = (number / 3);
    console.log(value);
};
divideByThree(6); //This is calling the function


var greeting = function (name) {
    console.log("Great to see you," + " " + name);
    };
greeting("Aaron Macdonald");

var orangeCost = function (cost) {
    var totalCost = (5 * cost);
    console.log (totalCost);
    };
orangeCost (5);


USING THE FUNCTION INSIDE A VARIABLE DECLARATION
var timesTwo = function(number) {
    return number * 2;
};
var newNumber = timesTwo(10);
console.log(newNumber);

USING AN IF STATEMENT INSIDE A FUNCTION - USES "RETURN" TO STORE THE NUMBER
var quarter = function (number) {
    return number / 4;
      if (quarter(24) % 3 === 0 ) {
        console.log("The statement is true");
      }
      else {
        console.log("The statement is false");
      }
};

USING 2 PARAMETERS - SEPARATED WITH A COMA
var perimeterBox = function (length, width) {
    return length * 2 + width * 2;
};
perimeterBox (10, 5);

GLOBAL vs LOCAL

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};
timesTwo(7);
console.log("Outside the function my_number is: ")
console.log(my_number);

IS NOT A NUMBER (isNAN)
var isEven = function(number) {
    if(number%2 ===0) {
        return true;
    }
    else {
        return false;
    }
}

var isEven = function(number) {
    if (isNaN(number)) {
        return ("Please enter a number!");
    }
    else if (number%2 ===0) {
        return true;
    }
    else {
        return false;
    }
}
