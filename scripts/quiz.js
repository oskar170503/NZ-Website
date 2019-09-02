// welcome menu
alert("Welcome to my 2019 New Zealand Quiz!");

// saves the users name and if nothing is entered a loop asks again
var Name = prompt("First of all, what is your name?");
while (Name == null || Name == "") {
  alert("Please enter your name.");
  var Name = prompt("First of all, what is your name?");
}

// interacts with the user by using their name and shows them the rules
alert("Okay great " + Name + ", let's get started!");

alert("Here are the rules:\nIf you think the statement is right, type in 't'.\nIf you think the statement is wrong, type in 'f'.\nHave fun!")

// these are all the questions for my quiz they can be accessed by using numbers from 0 to 9
var Question = [
  "Wellington is the capital city of New Zealand.",
  "Christchurch is the biggest city of New Zealand.",
  "The national Bird of New Zealand is a Kiwi.",
  "The silver fern is not symbolising New Zealand.",
  "Chocolate Fish were created in New Zealand.",
  "People in New Zealand say “Kia Ora”.",
  "Maori is the native language of Australia.",
  "Queenstown is part of New Zealand.",
  "Cape Town is part of the south island.",
  "New Zealand has under 3 million citizens."
];

// the answer options
var Answer = [
  "Your answer is right, well done!",
  "Your answer is wrong, better luck next time!"
];

//If (askQuestion0 == "quit" || askQuestion1 == "quit" || askQuestion2 == "quit" || askQuestion3 == "quit" || askQuestion4 == "quit" || askQuestion5 == "quit" || askQuestion6 == "quit" || askQuestion7 == "quit" || askQuestion8 == "quit" || askQuestion9 == "quit")

// asks the first question
var questionCount = 0

var askQuestion0 = prompt(Question[0]);
if (askQuestion0 == "t") {
  alert(Answer[0]);
  var askQuestion0 = 1;
} else if (askQuestion0 != "t") {
  alert(Answer[1]);
  askQuestion0 = 0;
}

// asks the second question
var askQuestion1 = prompt(Question[1]);
if (askQuestion1 == "f") {
  alert(Answer[0]);
  var askQuestion1 = 1;
} else if (askQuestion1 != "f") {
  alert(Answer[1]);
  askQuestion1 = 0;
}

// asks the third question
var askQuestion2 = prompt(Question[2]);
if (askQuestion2 == "t") {
  alert(Answer[0]);
  var askQuestion2 = 1;
} else if (askQuestion2 != "t") {
  alert(Answer[1]);
  askQuestion2 = 0;
}

// asks the fourth question
var askQuestion3 = prompt(Question[3]);
if (askQuestion3 == "f") {
  alert(Answer[0]);
  var askQuestion3 = 1;
} else if (askQuestion3 != "f") {
  alert(Answer[1]);
  askQuestion3 = 0;
}

// asks the fifth question
var askQuestion4 = prompt(Question[4]);
if (askQuestion4 == "t") {
  alert(Answer[0]);
  var askQuestion4 = 1;
} else if (askQuestion4!= "t") {
  alert(Answer[1]);
  askQuestion4 = 0;
}

// asks the sixth question
var askQuestion5 = prompt(Question[5]);
if (askQuestion5 == "t") {
  alert(Answer[0]);
  var askQuestion5 = 1;
} else if (askQuestion5 != "t") {
  alert(Answer[1]);
  askQuestion5 = 0;
}

// asks the seventh question
var askQuestion6 = prompt(Question[6]);
if (askQuestion6 == "f") {
  alert(Answer[0]);
  var askQuestion6 = 1;
} else if (askQuestion6 != "f") {
  alert(Answer[1]);
  askQuestion6 = 0;
}

// asks the eighth question
var askQuestion7 = prompt(Question[7]);
if (askQuestion7 == "t") {
  alert(Answer[0]);
  var askQuestion7 = 1;
} else if (askQuestion7 != "t") {
  alert(Answer[1]);
  askQuestion7 = 0;
}

// asks the nineth question
var askQuestion8 = prompt(Question[8]);
if (askQuestion8 == "f") {
  alert(Answer[0]);
  var askQuestion8 = 1;
} else if (askQuestion8 != "f") {
  alert(Answer[1]);
  askQuestion8 = 0;
}

// asks the tenth question
var askQuestion9 = prompt(Question[9]);
if (askQuestion9 == "f") {
  alert(Answer[0]);
  var askQuestion9 = 1;
} else if (askQuestion9 != "f") {
  alert(Answer[1]);
  askQuestion9 = 0;
}

// adds all the right answers together to display total number of right answers
var questionCount = Number(askQuestion0 + askQuestion1 + askQuestion2 + askQuestion3 + askQuestion4 + askQuestion5 + askQuestion6 + askQuestion7 + askQuestion8 + askQuestion9)

// displays a different outcome for different scores
if (questionCount == 5) {
  alert("Good effort, 50% of your answers are right. \nYour total score is " + questionCount + "/10")
} else if (questionCount == 6 || questionCount == 7 || questionCount == 8 || questionCount == 9) {
  alert("Well done, You know a lot about New Zealand! \nYour total score is " + questionCount + "/10")
} else if (questionCount == 4 || questionCount == 3) {
  alert("Good, but you need to learn more about New Zealand, \nYour total score is " + questionCount + "/10")
} else if (questionCount == 2 || questionCount == 1) {
  alert("What are you doing? Your total score is " + questionCount + "/10")
} else if (questionCount == 10) {
  alert("Very good! You answered everything correctly. \nYour total score is " + questionCount + "/10")
}

// says goodbye to the user
alert("Thank you for your time " + Name + "!")