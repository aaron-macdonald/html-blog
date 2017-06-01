// function Animal(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
// }
// Animal.prototype.sayName = function() {
//     console.log("Hi my name is " + this.name);
// };
//
//
// // create a Penguin constructor here
// function Penguin(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
// }
//
// // create a sayName method for Penguins here
// Penguin.prototype.sayName = function() {
//     console.log("Hi my name is " + this.name);
// }
//
//
// // our test code
// var theCaptain = new Penguin("Captain Cook", 2);
// theCaptain.sayName();

// // the original Animal class and sayName method
// function Animal(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
// }
// Animal.prototype.sayName = function() {
//     console.log("Hi my name is " + this.name);
// };
//
// // define a Penguin class
// function Penguin(name) {
//     this.name = name;
//     this.numLegs = 2;
// }
// // set its prototype to be a new instance of Animal
// Penguin.prototype = new Animal();
// var penguin = new Penguin("Ziggy");
// penguin.sayName(penguin);

// function Penguin(name) {
//     this.name = name;
//     this.numLegs = 2;
// }
//
// // create your Emperor class here and make it inherit from Penguin
// function Emperer(name) {
//     this.name = name;
// }
//
// Emperer.prototype = new Penguin();
//
// // create an "emperor" object and print the number of legs it has
// var emperer = new Emperer("Stuart");
// console.log(emperer.numLegs);

// function Person(first,last,age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
// }
//
// // create your Person
// var john = new Person("Aaron", "Macdonald", 46);
//
// // try to print his bankBalance
// console.log(john.bankBalance);
//
// function Person(first,last,age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
//
//    var returnBalance = function() {
//       return bankBalance;
//    };
//
//    this.askTeller = function() {
//        return returnBalance;
//    };
//
// }
//
// var john = new Person('John','Smith',30);
// console.log(john.returnBalance);
// var myBalanceMethod = john.askTeller();
// var myBalance = myBalanceMethod();
//
// console.log(myBalance);

// var languages = {
//     english: "Hello!",
//     french: "Bonjour!",
//     notALanguage: 4,
//     spanish: "Hola!"
// };
// // print hello in the 3 different languages
// for (var x in languages){
//     if (typeof languages[x] == "string") {
//         console.log(languages[x]);
//     }
// };
