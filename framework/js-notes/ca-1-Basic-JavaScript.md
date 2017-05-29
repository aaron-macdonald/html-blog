var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

.push() - adds an element to the end of an array
.pop() - removes last element from an array
.shift() - removes first element from an array
.unshift() - adds ann element to the start of an array

/// Conditional Logic with If Statements ///

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"

/// Equality Operators ///
// There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value. //
// The most basic operator is the equality operator ==
// Strict equality operator ===, tests both the data and the type.

/// Inequality Operators ///
// The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
//Strict Inequality Operator !==

/// GOLF EXAMPLE ///
function golfScore (par, strokes) {
           if (strokes === 1) {
        return "Hole-in-one!";
    } else if (strokes === par-3) {
        return "Eagle";
    } else if (strokes === par-2) {
        return "Eagle";
    } else if (strokes === par-1) {
        return "Birdie";
    } else if (strokes === par) {
        return "Par";
    } else if (strokes === par+1) {
        return "Bogey";
    } else if (strokes === par+2) {
        return "Double Bogey";
    } else if (strokes >= par+3) {
        return "Go Home!";
  }
}
// Change these values to test
golfScore(5, 4);


/// BLACKJACK EXAMPLE ///
var count = 0;

function cc(card) {
  if (card < 7) {
    count++;
    if (count >0) {
      return (count + " Bet");
    } else {
        return (count + " Hold");
    }
  }
  else if (card <10) {
    count = count;
    if (count >0) {
        return (count + " Bet");
    } else {
        return (count + " Hold");
    }
  }
  else {
    count--;
    if (count >0) {
        return (count + " Bet");
    } else {
        return (count + " Hold");
    }
  }
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(7); cc(8); cc(9);
