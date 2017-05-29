strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)

for (var i = 1; i < 21; i++) {
    if ((i % 3 === 0) && (i % 5 ===0)) {
        console.log ("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log ("Fizz");
    }
    else if (i % 5 === 0) {
        console.log ("Buzz")
    }
    else {
        console.log (i)
    }
}
