const question1 = document.getElementById("answer1");
const question2 = document.getElementById("answer2");
const question3 = document.getElementById("answer3");
const mainquestion = document.getElementById("main-question");
const results = document.getElementById("results");
question1.addEventListener("click", answer1);
question2.addEventListener("click", answer2);
question3.addEventListener("click", answer3);
let score = 0;
let questionnumber = 0;

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
function displayquestion(number) {
  question1.innerText = questions[number].answers.a;
  question2.innerText = questions[number].answers.b;
  question3.innerText = questions[number].answers.c;
  mainquestion.innerText = questions[number].question;
  results.innerText = "Your score is " + score + " out of " + number;
}
const questions = [
  {
    question: "Who is the current chess world champion?",
    answers: {
      a: "Magnus Carlsen",
      b: "Hikaru Nakamura",
      c: "Lex Luthor",
    },
    correctAnswer: "a",
  },
  {
    question: "Which two pieces are involved in castling?",
    answers: {
      a: "Knight and Samurai",
      b: "Queen and Rook",
      c: "King and Rook",
    },
    correctAnswer: "c",
  },
  {
    question: "How many squares are on a chess board?",
    answers: {
      a: "2084",
      b: "64",
      c: "21",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the winning move called?",
    answers: {
      a: "Checkmate",
      b: "Checkmark",
      c: "Shazam",
    },
    correctAnswer: "a",
  },
  {
    question: "What FIDE rating is required for the title Fide Master(FM)",
    answers: {
      a: "2200",
      b: "2300",
      c: "2400",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the most popular response to 1.e4?",
    answers: {
      a: "e5",
      b: "e6",
      c: "c5",
    },
    correctAnswer: "c",
  },
  {
    question: "What is a draw?",
    answers: {
      a: "Checkmate",
      b: "Stalemate",
      c: "Shazam",
    },
    correctAnswer: "b",
  },
  {
    question: "How many forms of castling are there?",
    answers: {
      a: "Short Castling",
      b: "Long Castling",
      c: "Both",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the most popular first move?",
    answers: {
      a: "e4",
      b: "d4",
      c: "c4",
    },
    correctAnswer: "a",
  },
  {
    question: "What is a very bad move called?",
    answers: {
      a: "Innacurracy",
      b: "Mistake",
      c: "Blunder",
    },
    correctAnswer: "c",
  },
];
displayquestion(questionnumber);
