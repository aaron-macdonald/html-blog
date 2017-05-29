METHODS

Object Orientated Programming (OOP)

FUNCTION Refresher
// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product

var multiply = function (x, y) {
    return x * y;
};
multiply (5, 10);


// METHOD

// here is bob again, with his usual properties
// this time we have added a method, setAge

var bob = new Object();
  bob.name = "Bob Smith";
  bob.setAge = function (newAge){
    bob.age = newAge;
    };

// bob's feeling old.  Use our method to set bob's age to 20
  bob.setAge(20);



// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};

// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
// here, update Bob's age to 50 using the method
bob.setAge(50);

// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 30;
susan.setAge = setAge;
// here, update Susan's age to 35 using the method
susan.setAge(35);



var rectangle = new Object();
  rectangle.height = 3;
  rectangle.width = 4;

// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
   this.width = newWidth;
};

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);


var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
    return this.sideLength * this.sideLength;
};
var p = square.calcPerimeter();
var a = square.calcArea();
