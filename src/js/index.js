import { questions } from "./questions";
//Modifying an element from html by its Id
const question1 = document.getElementById("answer1");
const question2 = document.getElementById("answer2");
const question3 = document.getElementById("answer3");
const mainquestion = document.getElementById("main-question");
const results = document.getElementById("results");
//Listen for a click to move on to the next question
question1.addEventListener("click", answer1);
question2.addEventListener("click", answer2);
question3.addEventListener("click", answer3);
let score = 0;
let questionnumber = 0;

//function for questions. Answer1 corresponds to "a". If answered correctly add a score of 1
function answer1() {
  if (questions[questionnumber].correctAnswer === "a") {
    score += 1;
  }
  questionnumber += 1;

  displayquestion(questionnumber);
}

function answer2() {
  if (questions[questionnumber].correctAnswer === "b") {
    score += 1;
  }
  questionnumber += 1;

  displayquestion(questionnumber);
}

function answer3() {
  if (questions[questionnumber].correctAnswer === "c") {
    score += 1;
  }
  questionnumber += 1;
  displayquestion(questionnumber);
}
// Display the answer choices
function displayquestion(number) {
  if (number === 10) {
    question1.style.visibility = "hidden";
    question2.style.visibility = "hidden";
    question3.style.visibility = "hidden";
    mainquestion.style.visibility = "hidden";
    results.style.fontSize = "400%";
    results.style.alignContent = "center";
  } else {
    question1.innerText = questions[number].answers.a;
    question2.innerText = questions[number].answers.b;
    question3.innerText = questions[number].answers.c;
    mainquestion.innerText = questions[number].question;
  }
  // String of results
  results.innerText = "Your score is " + score + " out of " + number;
}

displayquestion(questionnumber);
