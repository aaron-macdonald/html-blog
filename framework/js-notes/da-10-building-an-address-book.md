/// BUILDING AN ADDRESS BOOK ///


// Created 2 objects (Bob and Mary) with parameters (firstName, lastName ...) //
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

// Created an Array of the 2 objects
var contacts = [bob, mary];

// Created a function with an input variable "person" ... that console.logs these properties ("firstName" and "lastName") of the newly created variable "person"
var printPerson = function(person){
    console.log (person.firstName + " " + person.lastName);
    }

// Called the printPerson function inputing the "contacts" array positions 0 first and then position 1 next.
printPerson (contacts[0]);
printPerson (contacts[1]);

// Now using a loop - REMEMBER - the for loop uses { } after the loop part as a "do this each loop"

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

var printPerson = function(person) {
    console.log (person.firstName + " " + person.lastName);
}

var list = function() {
    var contactsLength = (contacts.length);
    for (var i=0; i<(contactsLength); i++) {
      printPerson (contacts[i]);
    }
};
list();
