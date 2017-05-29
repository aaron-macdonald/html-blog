FIND MY NAME



text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}


text = "lkj wer dsf Aaron sdf wret poio Aaron bob caleb";
var myName = "Aaron";
var hits = [];

for (var i=0; i<text.length; i++){
    if (text[i]==="A") {
        for (var j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}

if (hits.length ===0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
