var questionnaire = [
  {
    question:
      "Jack is going to the library to get a book to help him study. Bri says “Hah, imagine having to study. Couldn’t be me.”",
    response: "Bri is not being very supportive of Jack.",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Shelia is going on vacation at a lake a few hours away with her family. Jacob says “Why would you go with them when you’ll have much more fun here with me. If you don’t stay here I’m gonna break up with you.”",
    response: "Jacob is trying to isolate Shelia from her family.",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Sam comes over to Brendan’s house and they are working on homework together and Sam gets a prompt to discuss with someone around him, so he discusses it with Brendan. After the debate, Brendan says “It was interesting to hear your opinion even though we didn’t quite agree on it.”",
    response:
      "Sam and Brendan respect each other’s opinions and they don’t judge each other.",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Aaron is going to compete in a swimming competition and before he leaves, Jordan says “Hah, maybe you’ll do at least a little better than you did last time.”",
    response: "Jordan isn’t being very supportive of Aaron’s endeavors.",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Jake has been super busy with studying for his final exams and has been ignoring Selena whenever she tries to talk to him. Jake texts Selena “hey im trying to study. leave me alone”",
    response:
      "Jake isn’t being very responsive or polite about his needing to study.",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Faith doesn’t do well on his Spanish quiz, Luca tells her “That quiz was definitely a hard one. Let’s study together so we can both do well next time.”",
    response: "Faith and Luca are supportive of each other.",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Max is coming home from work and decides to get takeout because he is very tired. He orders it but forgets that he was supposed to go over to Peggy’s house for dinner. Peggy calls him later and asked what happened, Max responded “Oh I’m so sorry I totally forgot, today was a long day at work.” Peggy says she understands and there’s nothing to worry about.",
    response:
      "Peggy is understanding and doesn’t get mad or blame Max for not showing up.",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Ashley accidentally buys the wrong ingredient for the dinner that she’s making for her and Caleb’s family and Caleb says “Oh no worries, I can run to the store and grab some more real quick.”",
    response:
      "Caleb offers to help Emily fix the dinner and isn’t worried about it.",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "James just got back from his track meet and he got 3rd place in his event. Jack tells him “Only 3rd? Even I could do better than that. Try harder next time.”",
    response: "Jack is not celebrating or recognising James’ achievements.",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Alex wants to go see the new movie at the local movie theater and invited Jessie along. Jessie says “I saw that one already, but it’s really good. I can’t wait to see it again.”",
    response: "Alex and Jessie make sure to keep their relationship fun.",
    correct: 1 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Skylar goes to the local ice cream shop to get a cone and sees one of her friends there. She talks with her friend for a while, and then goes home. Sarah says “Why were you talking with your friend? I think you’re cheating on me.”",
    response: "Sarah doesn’t have much trust in Skylar or their relationship.",
    correct: 0 // 0 = Not Love, 1 = Love
  },
  {
    question:
      "Max wants to go hang out with his friends for a few hours. Ria tells him “Awesome! Have fun!”",
    response: "Max and Ria have independence in their relationship",
    correct: 1 // 0 = Not Love, 1 = Love
  }
  /*
  {
    "question" : "",
    "response" : "",
    "correct"  : 0, // 0 = Not Love, 1 = Love
  },*/
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

questionnaire = shuffle(questionnaire);
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
  var resp = answerIsCorrect ? "Correct!" : "Wrong!";
  currQ.answer = idx; // Put user answer into object (0 or 1)
  $qH2.text(/*c + 1 + ". " + */currQ.question);
  $response.text(resp + " " + currQ.response);
}
QandA();


$answer.click(function() {
  var idx = $answer.index(this); // 0 or 1  (get button index)
  QandA(idx);
  $rDIV.fadeTo(600, 1);
  $qDIV.hide();
  //console.log(JSON.stringify(questionnaire, null, 1)); // TEST ONLY
});

$("#prev, #next").click(function() {
  c = this.id == "next" ? ++c : c; // advance or repeat Question
  QandA();
  $("#next").toggle(c < tot - 1);
  $("#score").toggle(c >= tot - 1);
});

$("#score").click(function() {
  $("#QA").toggle(false);
  $("#QAafter").toggle(true);
  //c = 0; // reset questionnary to first question
  //questionnaire = shuffle(questionnaire);
  //$("pre").text(JSON.stringify(questionnaire, null, 2));
  //QandA(); // Restart
});
