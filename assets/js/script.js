// quiz questions
quizQA = {
  questions: ["Who is the god of war?", 
    "What creature was Medusa turned into?", 
    "Hercules is the son of which gods?"],
  answers: ["Hades", "Zeus", "Ares", "Hephaestus",
    "Gorgon", "Satyr", "Driad", "Nymph",
    "Zeus and Aphrodite", "Poseidon and Athena", "Hades and Persephone", "Zeus and Hera"]
};

// 2 minute initial timer
var timeLeft = 120;

var quizStart = function() {
  // display the quiz
  $("#quiz").show(1000);
  
  // while loop to account for remaining time
  while (timeLeft > 0) {
    // debugger;
    // loop over questions
    for (i = 0; i < quizQA.questions.length; i++) {
      $("#quiz-content").append("<h2>" + quizQA.questions[i] + "</h2>");
      console.log(quizQA.questions[i]);
      // loop over answers
      for (i = 0; i < 4; i++) {
        $("#quiz-content").append("<button class='mt-2'>" + quizQA.answers[i] + "</button>");
        console.log(quizQA.answers[i]);
      }
    }
  }
  
};



// when start button is clicked
$("#start").click(function() {
  // hide the intro
  $("#intro").hide("slow");
  

  // timer for the quiz, updates every second
  var timer = setInterval(function() {
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;
    console.log(timeLeft);
    timeLeft--;
  }, 1000);

  // start the quiz
  quizStart();
});