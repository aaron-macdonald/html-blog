/// An Object Review ///

// An Object //
var james = {
    job: "programmer",
    married: false
    };

// An Object Constructor //  
var Person = function (job, married) {
    this.job = job;
    this.married = married;
}
var gabby = new Person ("student", true);

// METHOD - Functions nested within an Object Constructor Notation//
function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function (){
        console.log ("Hello!");
    }
}
var user = new Person("Codecademy Student",false);
user.speak();

// Method - Functions nested within an Object via Literal Notation //
var james = {
    job: "programmer",
    married: false,
    speak: function(x) {
        console.log ("Hello, I am feeling " + x)
    }
};
james.speak("great");
james.speak("just okay");


// this.propertyName - remembers the most recent value of propertyName //
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a " + this.job);      
    }
};
// james' first job
james.sayJob();
// change james' job to "super programmer" here
james.job = "super programmer";
// james' second job
james.sayJob();


// Using BRACKET notation [] - can use variables whose "values" are property names //
var james = {
    job: "programmer",
    married: false
};
// set to the first property name of "james"
var aProperty = "job";
// print the value of the first property of "james"
// using the variable "aProperty"
console.log (james[aProperty]);

// typeof //
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";
console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"

// hasOwnProperty //
var myObj = {
    name: "George"
};
console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

// Using hasOwnProperty //
var suitcase = {
    shirt: "Hawaiian"
};
if (suitcase.hasOwnProperty('shorts')) {
    console.log (suitcase[shorts])
}
else {
    suitcase.shorts = "Beach";
    }

// for-in loop //
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5yc ) {
    console.log(property);
};

/// REMEMBER ///
var dog = {
species: "bulldog",
age: 3,
color: brown
};
/////////////////////////////////////////
dog.species = dog("species") = "bulldog";
var x = "species";
dog[x] = "bulldog";
/////////////////////////////////////////

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
// write a for-in loop to print nyc's properties
for (property in nyc) {
        console.log(property);
};
// write a for-in loop to print the value of nyc's properties
for (value in nyc) {
        console.log(nyc[value]);

// ------------ ALSO WILL GET SAME RESULT---------- //

for (x in nyc) {
    console.log(x);
}
for (y in nyc) {
    console.log(nyc[y])
}

// ----- CAN COMBINE AS REFERENCING THE SAME PROPERTIES OF NYC ------ //
for (x in nyc) {
    console.log(x + " - " + nyc[x])
};

//--- "in" triggers elements ... object[]  triggers values of those objects ---//
// ALL WITHOUT DEFINING VARIABLES //
