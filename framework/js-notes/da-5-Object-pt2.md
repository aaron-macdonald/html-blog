OBJECTS PT2

Objects are just collections of information (keys and values) between curly braces, like this:

LITERAL
var myObject = {
    key: value,
    key: value,
    key: value
};

CONSTRUCTOR
var myObject = new Object{};
  myObject.key = "value";
  myObject.key = "value";
  myObject.key = "value";



//Using a function inside an Object

var phonebookEntry = {};
  phonebookEntry.name = 'Oxnard Montalvo';
  phonebookEntry.number = '(555) 555-5555';
  phonebookEntry.phone = function() {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();
  -- Calls the "phone element" (which is a function with a console.log) inside the Object "phonebookEntry"
