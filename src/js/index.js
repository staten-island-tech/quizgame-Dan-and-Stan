function buildQuiz() {
  // stores the html output
  const output = [];

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // stores possible answers
    const answers = [];

    for (letter in currentQuestion.answers) {
      // this adds a button that gives options
      answers.push(
        `<label>    
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
      );
    }

    // adds the questions and answers to the output
    output.push(
      `<div class="page">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
    );
  });

  // actually displays the quiz in html
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gathers answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keeps track of user's answers
  let numCorrect = 0;

  // for each question
  questions.forEach((currentQuestion, questionNumber) => {
    // finds selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if the answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // adds to the number of correct answers
      numCorrect++;
    }
  });

  // shows number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

// puts each question on its own page in order to go back and forth between questions
function showPage(n) {
  pages[currentPage].classList.remove("active-page");
  pages[n].classList.add("active-page");
  currentPage = n;
  if (currentPage === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentPage === pages.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

// allows to go to the next question
function showNextPage() {
  showPage(currentPage + 1);
}

// allows to go to the previous question
function showPreviousPage() {
  showPage(currentPage - 1);
}

// container around entire quiz
const quizContainer = document.getElementById("quiz");

// container for results
const resultsContainer = document.getElementById("results");

// submit button
const submitButton = document.getElementById("submit");

// Quiz questions
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

buildQuiz();

// allows the user to go back and forth through the pages
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const pages = document.querySelectorAll(".page");
let currentPage = 0;

showPage(currentPage);

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousPage);
nextButton.addEventListener("click", showNextPage);
