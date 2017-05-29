Comparisons
So far we've learned about three data types:

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)
Now let's learn more about comparison operators.

List of comparison operators:

> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to
( ): control order of operations
* and /: multiplication and division
- and +: subtraction and addition

if ("Aaron David Macdonald".length > 5 )
  {
    console.log("Let's go down the first road!");
  }
else
  {
    console.log("Your name aint that long!")
  }

// This is an example of an if / else statement.
if (12 / 3 > "Ari".length) {
  prompt("Will this run the first block?");
  }
 else {
  confirm("Or the second block?");
  }

% modulo... prints the remainder
if(50 % 2 === 0  )
    {console.log("The first number is even");
    }
else
    {console.log("The first number is odd");  
    }

Substring
    "wonderful day".substring(3,7);
    "derf"

Variables - declare Variables
    var myAge = 44;
    console.log(myAge);

// Declare a variable on line 3 called
// myCountry and give it a string value.
    var myCountry = "New Zealand"

// Use console.log to print out the length of the variable myCountry.
    console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
    console.log(myCountry.substring(0,3 ));

// On line 2, declare a variable myName and give it your name.
    var myName = "Aaron";
// On line 4, use console.log to print out the myName variable.
    console.log(myName);
// On line 7, change the value of myName to be just the first 2
// letters of your name.
    var myName = myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
    console.log(myName);
