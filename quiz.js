// variables
var correct = 0;

// prompt
var answer1 = prompt("what's heavier, a feather or a brick?");
var answer2 = prompt("What color is a green house");
var answer3 = prompt("if I had 2 apples, how many apples do I have?");
var answer4 = prompt("did Sally really sell seashells at the seashore?");
var answer5 = prompt("How much wood could a woodchuck chuck if a woodchuck couldn't chuck wood?");

// if statement
if ( answer1.toUpperCase() === 'BRICK' ) {
 correct += 1;
}
if ( answer1.toUpperCase() === 'A BRICK' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'GREEN' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === '2' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'YES' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === '0' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'NONE' ) {
 correct += 1;
}

// output results
document.write("<p>" + answer1 + "</p>");
document.write("<p>" + answer2 + "</p>");
document.write("<p>" + answer3 + "</p>");
document.write("<p>" + answer4 + "</p>");
document.write("<p>" + answer5 + "</p>");


if ( correct === '5' ) {
document.write("<p>CONGRATULATIONS. YOU GOT ALL 5 RIGHT.</p>");
}
if ( correct === '4' ) {
document.write("<p>PRETTY GOOD. YOU GOT 4 RIGHT.</p>");
}
if ( correct === '3' ) {
document.write("<p>NOT BAD. YOU GOT 3 RIGHT.</p>");
}
if ( correct === '2' ) {
document.write("<p>PRETTY NOT GOOD. YOU GOT 2 RIGHT.</p>");
}
if ( correct === '1' ) {
document.write("<p>RETHINK YOUR LIFE. YOU ONLY GOT 1 RIGHT.</p>");
}

