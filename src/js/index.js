console.log("connected");

// these are the questions and answers for the quiz
var questions = [
  {
    prompt: "What color are oranges?\n(a) Orange\n (b) Purple",
    answer: "a",
  },
];

// this variable is the total amount of right answers
var score = 0;

// this opens a window with the question and a space for the answer. If you get it right, there is an alert that tells you so. Same thing if you got it wrong
for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    score++;
    alert("Correct");
  } else {
    alert("Wrong");
  }
}

// this alert tells you the amount of questions you got correct out of the total amount of questions

alert("You got " + score + "/" + questions.length);
