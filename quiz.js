var questionnaire = [
  {
    question:
      "Max wants to go hang out with his friends for a few hours. Ria tells him “Awesome! Have fun!”",
    response: "Max and Ria have dependence in their relationship",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Jeremy doesn’t do well on his Spanish quiz, Faith tells him “That quiz was definitely a hard one. Let’s study together so we can both do well next time.”",
    response:
      "Faith shows Jeremy kindness by offering to study together so they can both do better in school.",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Jack is going to the library to get a book to help him study. Bri says “I’ll come with you so we can both get books to help us study!”",
    response: "Jack and Bri ",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "James wants to go see the new movie at the local movie theater. Jessie says “I saw that one already, it’s really good. You’re gonna love it.”",
    response: "",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question: "",
    response: "",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question: "",
    response: "",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question: "",
    response: "",
    correct: 0 // 0 = Not Love, 1 = Love
  }
  /*
  {
    "question" : "",
    "response" : "",
    "correct"  : 0, // 0 = Not Love, 1 = Love
  },*/
];

var $qDIV = $("#qDIV"),
  $rDIV = $("#response"),
  $qH2 = $("h2", $qDIV),
  $answer = $("button", $qDIV),
  $response = $("p", $rDIV),
  tot = questionnaire.length,
  c = 0; // Current Q array counter

function QandA(idx) {
  $qDIV.fadeTo(600, 1);
  $rDIV.hide();
  var currQ = questionnaire[c]; // The Object literal from Array
  var isCorrect = currQ.correct; // 0 or 1?
  var answerIsCorrect = idx == isCorrect; // (compare values) Returns boolean
  var resp = answerIsCorrect ? "Great!" : "Wrong!";
  currQ.answer = idx; // Put user answer into object (0 or 1)
  $qH2.text(c + 1 + ". " + currQ.question);
  $response.text(resp + " " + currQ.response);
}
QandA();

$answer.click(function() {
  var idx = $answer.index(this); // 0 or 1  (get button index)
  QandA(idx);
  $rDIV.fadeTo(600, 1);
  $qDIV.hide();
  console.log(JSON.stringify(questionnaire, null, 1)); // TEST ONLY
});

$("#prev, #next").click(function() {
  c = this.id == "next" ? ++c : c; // advance or repeat Question
  QandA();
  $("#next").toggle(c < tot - 1);
  $("#score").toggle(c >= tot - 1);
});

$("#score").click(function() {
  c = 0; // reset questionnary to first question
  $("pre").text(JSON.stringify(questionnaire, null, 2));
  QandA(); // Restart
});
