/// ARRAY OF OBJECTS ///

// An Array of Objects //
// Our Person constructor //
function Person (name, age) {
    this.name = name;
    this.age = age;}
// Now we can make an array of people //
var family = new Array();
    family[0] = new Person ("alice", 40);
    family[1] = new Person ("bob", 42);
    family[2] = new Person ("michelle", 8);
    family[3] = new Person ("timmy", 6);
// loop through our new array //
for (var i=0; i<4; i++) {
    console.log (family[i].name, family[i].age);};


// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people

//Another Array of Ojects //
    this.name = name;
    this.age = age;
}
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}
// get the difference in age between alice and billy using our function //
var diff = ageDifference(alice, billy);
// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};



/// Make a new function, olderAge, to return the age of the older of two people ///
var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
    }
    else {
        return person2.age;
    }
};

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
