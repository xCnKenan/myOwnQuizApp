let questions = [
  {
    question:
      "Welche der folgenden Programmiersprachen ist für Anfänger am einfachsten zu lernen?",
    answer_1: "Assembly",
    answer_2: "Python",
    answer_3: "C++",
    answer_4: "Java",
    right_answer: 2,
  },
  {
    question: "Was ist eine Variable in der Programmierung?",
    answer_1: "Ein Wert, der sich niemals ändert",
    answer_2: "Eine Sammlung von Daten",
    answer_3: "Ein Container für Datenwerte",
    answer_4: "Ein spezielles Keyword",
    right_answer: 3,
  },
  {
    question:
      "Welche Programmiersprache wird hauptsächlich für die Webentwicklung im Frontend verwendet?",
    answer_1: "Python",
    answer_2: "JavaScript",
    answer_3: "C++",
    answer_4: "PHP",
    right_answer: 2,
  },
  {
    question:
      "Wie wird eine Schleife genannt, die eine festgelegte Anzahl von Wiederholungen ausführt?",
    answer_1: "While-Schleife",
    answer_2: "Do-While-Schleife",
    answer_3: "For-Schleife",
    answer_4: "Endlosschleife",
    right_answer: 3,
  },
  {
    question:
      "Welche Dateiendung wird üblicherweise für JavaScript-Skripte verwendet?",
    answer_1: ".js",
    answer_2: ".py",
    answer_3: ".cpp",
    answer_4: ".html",
    right_answer: 1,
  },
  {
    question: "Was ist HTML in der Programmierung?",
    answer_1: "Eine Programmiersprache",
    answer_2: "Ein Texteditor",
    answer_3: "Eine Auszeichnungssprache",
    answer_4: "Ein Datenbankformat",
    right_answer: 3,
  },
  {
    question:
      "Welche Funktion gibt die Länge einer Liste in JavaScript zurück?",
    answer_1: "length()",
    answer_2: "count()",
    answer_3: "size()",
    answer_4: "len()",
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
  document.getElementById("current-question").innerHTML = `${currentQuestion + 1}`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success"); // durch parentNode wird es dem übergeordneten div zugeordnet
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  showQuestion();
  resetAnswers();
}

function resetAnswers() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}
