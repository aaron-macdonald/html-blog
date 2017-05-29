https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript

                                WHAT IS JavaScript

Application Programming Interfaces (APIs)

Browser APIs
  DOM API (Document Object Model) - pop ups etc
  Geolocation API - Google Maps
  Canvas & WebGL - 2D & 3D graphics
  Audio & Video APIs - HTMLMediaElement & WebRTC

Third party APIs
  Not built into the browser by default
  Twitter API - displays latest tweets
  Google Maps API - embed custom maps into your website


  var para = document.querySelector('p');

  para.addEventListener('click', updateName);

  function updateName() {
    var name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
  }

  Interpreted vs Compiled
    javascript is an interpreted language, runs top-to-bottom and result of riunning the code is returned immediately.

  Server-side vs client-side
    Server side : PHP, Pythin, Ruby, ASP.NET and Javascript (Node.js)
    Although the MDN (Mozilla Developer Network) module focuses on Client-side.

  Dynamic Server-side and Client-side work differently:
    Client-side: works inside the Browser
    Server-side: generates new content on the server eg. pulling data from databases

  CSS uses <link> elements to apply external stylesheets and <style> elements to apply internal stylesheets.

  Javascript uses only <script> HTML elements

                                  A SPLASH INTO Javascript

  Thinking like a programmer

  Guess the Number Game

  BOSS:
  I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.

  Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

Generate a random number between 1 and 100.
Record the turn number the player is on. Start it on 1.
Provide the player with a way to guess what the number is.
Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
Next, check whether it is the correct number.
If it is correct:
Display congratulations message.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
If it is wrong and the player has turns left:
Tell the player they are wrong.
Allow them to enter another guess.
Increment the turn number by 1.
If it is wrong and the player has no turns left:
Tell the player it is game over.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
Let's now move forward, looking at how we can turn these steps into code, building up the example, and exploring JavaScript features as we go.

Functions - Reuseable blocks of code that you can write onmce and use again and again.

  function functionName() {function code goes in here}

*Can check variables in Developer Tools - Console ... by typing ...  functionName():

Operators - In the Console

Operator	Name	Example
+	Addition	6 + 9
-	Subtraction	20 - 15
*	Multiplication	3 * 7
/	Division	10 / 5

Code:
var name = 'Bingo';
name;
var hello = ' says hello!';
hello;
var greeting = name + hello;
greeting;

name += ' says hello!';
This is equivalent to
name = name + ' says hello!';

Operator	Name	Example
===	Strict equality (is it exactly the same?)	5 === 2 + 4
!==	Non-equality (is it not the same?)	'Chris' !== 'Ch' + 'ris'
<	Less than	10 < 6
>	Greater than	10 > 20

Conditions

Conditional Code blocks - run code selectively depending on conditions being true or false
  If and else if

Events

Events call Functions
  Constructs that listen for events are called 'event listeners'
  Blocks of code run in response to the event firing are called 'event handlers'

Loops

for (var i = 1 ; i < 21 ; i++) { console.log(i) }

A loop takes 3 input values:
A starting value: In this case we are starting a count at 1, but this could be any number you like. You can replace i with any name you like too, but i is used as a convention because it's short and easy to remember.
An exit condition: Here we have specified i < 21 — the loop will keep going until i is no longer less than 21. When i reaches 21, the loop will no longer run.
An incrementor: We have specified i++, which means "add 1 to i". The loop will run once for every value of i, until i reaches a value of 21 (as discussed above). In this case, we are simply printing the value of i out to the console on every iteration using console.log().

var resetParas = document.querySelectorAll('.resultParas p');
for (var i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}
This code creates a variable containing a list of all the paragraphs inside <div class="resultParas"> using the querySelectorAll() method, then it loops through each one, removing the text content of each.

A small discussion on Objects

Let's add one more final improvement before we get to this discussion. Add the following line just below the var resetButton; line near the top of your JavaScript, then save your file:

guessField.focus();
This line uses the focus() method to automatically put the text cursor into the <input> text field as soon as the page loads, meaning that the user can start typing their first guess right away, and doesn't have to click the form field first. It's only a small addition, but it improves usability — giving the user a good visual clue as to what they've got to do to play the game.

Let's analyze what's going on here in a bit more detail. In JavaScript, everything is an object. An object is a collection of related functionality stored in a single grouping. You can create your own objects, but that is quite advanced and we won't be covering it until much later in the course. For now, we'll just briefly discuss the built-in objects that your browser contains, which allow you to do lots of useful things.

In this particular case, we first created a guessField variable that stores a reference to the text input form field in our HTML — the following line can be found amongst our variable declarations near the top:

var guessField = document.querySelector('.guessField');
To get this reference, we used the querySelector() method of the document object. querySelector() takes one piece of information — a CSS selector that selects the element you want a reference to.

Because guessField now contains a reference to an <input> element, it will now have access to a number of properties (basically variables stored inside objects, some of which can't have their values changed) and methods (basically functions stored inside objects). One method available to input elements is focus(), so we can now use this line to focus the text input:

guessField.focus();
Variables that don't contain references to form elements won't have focus() available to them. For example, the guesses variable contains a reference to a <p> element, and guessCount contains a number.

Playing with browser objects
Every element on a page has a style property, which itself contains an object whose properties contain all the inline CSS styles applied to that element. This allows us to dynamically set new CSS styles on elements using JavaScript.

guesses.style.backgroundColor = 'yellow';
guesses.style.fontSize = '200%';
guesses.style.padding = '10px';
guesses.style.boxShadow = '3px 3px 6px black';
