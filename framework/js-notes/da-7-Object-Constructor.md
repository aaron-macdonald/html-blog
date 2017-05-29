OBJECT CONSTRUCTOR

/// Here we make bob using the generic Object constructor///
var bob = new Object();
  bob.name = "Bob Smith";
  bob.age = 20;
// Uses the built in empty "Object()"


///Create your own Object///
function Person(name,age) {
  this.name = name;
  this.age = age;
}
  var bob = new Person("Bob Smith", 30);
  var susan = new Person("Susan Jordan", 25);
  var george = new Person("George Washington", 275);



///Object constructor with a "constant"///
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}
var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age );
console.log("holden's species is " + holden.species + " and he is " + holden.age );



/// Function inside of an Object constructor///
function Rectangle (height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
        console.log (this.height * this.width);
    };
  this.calcPerimeter = function() {
        console.log (this.height * 2 + this.width * 2);
    };
};
var rectangle1 = new Rectangle(7,3);
rectangle1.calcArea();
rectangle1.calcPerimeter();




function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit2.describeMyself();
