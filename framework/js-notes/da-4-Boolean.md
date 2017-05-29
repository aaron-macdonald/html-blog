BOOLEAN

AND
true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false


// Declare variables
var iLoveJavaScript = (true) ;
var iLoveLearning = (true);

if(iLoveJavaScript && iLoveLearning) {
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}


// Declare variables
var hungry = (true);
var foodHere = (true);

var eat = function() {
  // Add your if/else statement here!
    if (hungry && foodHere) {
        return true;
  }
    else {
        return false;
  }
};


OR
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false

// Declare variables
var tired = (true);
var bored = (false);

var nap = function() {
    if (tired || bored) {
        return true;


NOT
!true;   // => false
!false;  // => true


// Declare variables
var programming = (false);

var happy = function() {
    if (!programming) {
        return true;
    }
    else {
        return false;
    }
};
