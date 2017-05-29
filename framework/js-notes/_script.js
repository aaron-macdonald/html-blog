// var phonebookEntry = {};
//   phonebookEntry.name = 'Oxnard Montalvo';
//   phonebookEntry.number = '(555) 555-5555';
//   phonebookEntry.phone = function() {
//     console.log('Calling ' + this.name + ' at ' + this.number + '...');
// };
// phonebookEntry.phone();


// function Rabbit(adjective) {
//     this.adjective = adjective;
//     this.describeMyself = function() {
//         console.log("I am a " + this.adjective + " rabbit");
//     };
// }
//
// // now we can easily make all of our rabbits
// var rabbit1 = new Rabbit("fluffy");
// var rabbit2 = new Rabbit("happy");
// var rabbit3 = new Rabbit("sleepy");
//
// rabbit2.describeMyself();
//
//
// function Rectangle (height, width) {
//   this.height = height;
//   this.width = width;
//   this.calcArea = function() {
//         console.log (this.height * this.width);
//     };
//   this.calcPerimeter = function() {
//         console.log (this.height * 2 + this.width * 2);
//     };
// };
// var rectangle1 = new Rectangle(7,3);
// rectangle1.calcArea();
// rectangle1.calcPerimeter();
//
// //Our Person constructor
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }
// // Now we can make an array of people
// var family = new Array();
//     family[0] = new Person ("alice", 40);
//     family[1] = new Person ("bob", 42);
//     family[2] = new Person ("michelle", 8);
//     family[3] = new Person ("timmy", 6);
// // loop through our new array
// for (var i=0; i<4; i++) {
//     console.log (family[i].name, family[i].age);
// };

//Another Array of Ojects //
// The person constructor //
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }
// console.log (Person);
//
// var alice = new Person ("Alice", 30);
// var billy = new Person ("Billy", 25);
// console.log (alice);
// console.log (billy);
//
// var ageDifference = function(person1, person2) {
//     console.log ( person1.age - person2.age);
// };
// console.log (ageDifference);

// get the difference in age between alice and billy using our function //
// var diff = ageDifference(alice, billy);

/// Make a new function, olderAge, to return the age of the older of two people ///
// The person constructor //
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//   }
// console.log (Person);
//
// var olderAge = function(person1, person2) {
//     if (person1.age > person2.age) {
//         return person1.age;
//     }
//     else {
//         return person2.age;
//     }
// };
// console.log (olderAge);
//
// // Let's bring back alice and billy to test our new function
// var alice = new Person ("Alice", 30);
// var billy = new Person ("Billy", 25);

// console.log("The older person is " + olderAge(alice, billy));
//

// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };
//
// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };
//
// var contacts = [bob, mary];
//
// var printPerson = function(person) {
//     console.log (person.firstName + " " + person.lastName);
// }
//
// var list = function() {
//     var contactsLength = (contacts.length);
//     for (var i=0; i<(contactsLength); i++) {
//       printPerson (contacts[i]);
//     }
// };
// list();

// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };
//
// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };
//
// var contacts = [bob, mary];
//
// var printPerson = function (person) {
//     console.log(person.firstName + " " + person.lastName);
// }
//
// var list = function() {
// 	var contactsLength = contacts.length;
// 	for (var i = 0; i < contactsLength; i++) {
// 		printPerson(contacts[i]);
// 	}
// };
//
// var search = function(lastName) {
//     var contactsLength = contacts.length;
//     for (var j = 0; j < contactsLength; j++) {
//         if (lastName === contacts[j].lastName) {
//             printPerson (contacts[j]);
//         }
//     }
// };
//
// search("Jones");

// var bob = {
//     firstName: "Bob",
//     lastName: "Jones",
//     phoneNumber: "(650) 777-7777",
//     email: "bob.jones@example.com"
// };
//// var mary = {
//     firstName: "Mary",
//     lastName: "Johnson",
//     phoneNumber: "(650) 888-8888",
//     email: "mary.johnson@example.com"
// };
//// var contacts = [bob, mary];
//// var printPerson = function (person) {
//     console.log(person.firstName + " " + person.lastName);
// }
//// var list = function () {
// 	var contactsLength = contacts.length;
// 	for (var i = 0; i < contactsLength; i++) {
// 		printPerson(contacts[i]);
// 	}
// }
//// var add = function (firstName, lastName, email, phoneNumber) {
//      contacts[contacts.length] = {
//             firstName: firstName,
//             lastName: lastName,
//             phoneNumber: phoneNumber,
//             email: email
//     }
// };
//// add("Aaron", "Macdonald", "(789) 654-3210", "aaron.macdonald@email.com");
// list();
//
//
// var james = {
//     job: "programmer",
//     married: false
// };
// // set to the first property name of "james"
// var aProperty = "job";
// // print the value of the first property of "james"
// // using the variable "aProperty"
// console.log (james[aProperty]);
//
// var nyc = {
//     fullName: "New York City",
//     mayor: "Bill de Blasio",
//     population: 8000000,
//     boroughs: 5
// };
//
// for(X in nyc) {
//     console.log(X + " - " + nyc[X]);
// };
