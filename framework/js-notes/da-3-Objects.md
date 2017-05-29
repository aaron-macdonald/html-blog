OBJECTS

LITERAL NOTATION

var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};

// here we assign Bob's information as variables
var name1 = bob.nsame;
var age1 = bob.age;

// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;


CONSTRUCTOR NOTATION
// Our bob object again, but made using a constructor this time
var bob = new Object();
  bob.name = "Bob Smith";
  bob.age = 30;

// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
  susan2.name = "Susan Jordan";
  susan2.age = 24


/// Properties ///
  // Properties are like variables that belong to an object, and are used to hold pieces of information. Properties can be accessed in two ways"//

  Dot notation, with ObjectName.PropertyName

  Bracket notation, with ObjectName["PropertyName"] (don't forget the quotes!)

  // SAVING PROPERTIES OF AN OBJECT AS THEIR OWN VARIABLE ///

  var snoopy = new Object();
  snoopy.species = "beagle";
  snoopy.age = 10;

  //Dot notation
  var species = snoopy.species;

  //Bracket notation
  var age = snoopy["age"];
