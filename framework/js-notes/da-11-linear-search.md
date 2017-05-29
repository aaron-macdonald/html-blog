/// LINEAR SEARCH ///

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

var printPerson = function (person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
};

var search = function(lastName) {
    var contactsLength = contacts.length;
    for (var j = 0; j < contactsLength; j++) {
        if (lastName === contacts[j].lastName) {
            printPerson (contacts[j]);
        }
    }
};

search("Jones");

/// Add a person ///
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

var printPerson = function (person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function () {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

var add = function (firstName, lastName, email, phoneNumber) {
     contacts[contacts.length] = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email
    }   
};

add("Aaron", "Macdonald", "(789) 654-3210", "aaron.macdonald@email.com");
list();
