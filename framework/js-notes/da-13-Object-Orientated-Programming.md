/// Object Orientated Programming (OOP) ///

// When you make a constructor, you are in fact defining a new CLASS //

// A CLASS can be thought of as a type, or a category of objects //

// bob and susan are two separate objects, but both belong to the CLASS Person. //

function Person(name,age) {
  this.name = name;
  this.age = age;
}
// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) {
    this.radius = radius;
}

// PROTOTYPE - Keeps track of what a class has or doesn't have, can or can't do  //

// Although Snoopy (below) is of the class dog, he can't bark until the bark method is added //

function Dog (breed) {
  this.breed = breed;
}
// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
  console.log("Woof");
};
snoopy.bark();

// Another example //

function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person ("Aaron Macdonal", 46);
printPersonName(me);

/// Using PROTOTYPE to update the CLASS

function Dog (breed) {
  this.breed = breed;
};
// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();
// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();

// To ADD a METHOD using PROTOTYPE //

/////////////////////////////////////////////
className.prototype.newMethod = function() {
  statements;
};
/////////////////////////////////////////////

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}
// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function() {
    console.log("Meow!")
}
// add code here to make the cats meow!
cheshire.meow();
gary.meow();

/// INHERITANCE ///
// In object-oriented programming, inheritance allows one class to see and use the methods and properties of another class. //

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// create a Penguin constructor here
function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
// create a sayName method for Penguins here
Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
}
// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();

// Whenever this X is-a Y relationship exists, there's a good chance that we should be using inheritance.//
//Remember, inheritance lets us see and use properties and methods from another class. To say that Penguin inherits from Animal, we need to set Penguin's prototype to be Animal.//

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};
// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var penguin = new Penguin("Ziggy");
penguin.sayName(penguin);

//Another Example //
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
// create your Emperor class here and make it inherit from Penguin
function Emperer(name) {
    this.name = name;
}
Emperer.prototype = new Penguin();
// create an "emperor" object and print the number of legs it has
var emperer = new Emperer("Stuart");
console.log(emperer.numLegs);

/// PROTOTYPE CHAIN ///
// If JavaScript encounters something it can't find in the current class's methods or properties, it looks up the prototype chain to see if it's defined in a class that it inherits from. This keeps going upwards until it stops all the way at the top: the mighty Object.prototype (more on this later).//

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs  ); // should print 2
console.log(myEmperor.isAlive); // should print true

/// PUBLIC VARIABLES///
// In JavaScript all properties of an object are automatically public. Public means that they can be accessed outside the class. Think of these properties as the information a class is willing to share. //

function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}
var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;
//declare variable myAge set to the age of the john object.
var myAge = john.age;

/// PRIVATE VARIABLES///
// Declared with 'var' instead of 'this' //
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}
// create your Person
var john = new Person("Aaron", "Macdonald", 46);
// try to print his bankBalance
console.log(john.bankBalance);


// Create a Public Method inside the Person Class
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
   this.getBalance = function() {
    return bankBalance;
      };
}
var john = new Person('John','Smith',30);
console.log(john.bankBalance);
// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

/// PRIVATE METHODS ///
// Create a Public Method (using this.) inside the Person Class
// need to create a variable to call the method, then call the variable to get the value//

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
   var returnBalance = function() {
      return bankBalance;
   };
   this.askTeller = function() {
       return returnBalance;
   };
}
var john = new Person('John','Smith',30);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

/// PASSING ARGUMENTS ///
// Accessing a private variable via a public method using a password associated with the public method //

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}
var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);

/// For-in using typeof ///
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};
// print hello in the 3 different languages
for (var x in languages){
    if (typeof languages[x] == "string") {
        console.log(languages[x]);
    }
};

/// PROTOTYPE ///
// We should all know by now what's so cool about using prototype: we can define a method for a class, and any instance of the class (i.e., object created using that class's constructor) can use that method. //
// Remember that classes and the prototype are important to OOP! //

function Dog (breed) {
    this.breed = breed;
};
// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
  console.log("Hello this is a " + this.breed + " dog");
};
var yourDog = new Dog("golden retriever");
yourDog.sayHello();
var myDog = new Dog("dachshund");
myDog.sayHello();

/// Object.prototype ... what is it ? ///
// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
    console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
    console.log(hasOwn);

/// PUBLIC and PRIVATE - EXAMPLE ///
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}
var myStudentReport = new StudentReport();
for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}
console.log("Your overall GPA is " + myStudentReport.getGPA());
