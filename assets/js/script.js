// quiz questions
quizQA = {
  questions: ["Who is the god of war?", 
    "What creature was Medusa turned into?", 
    "Hercules is the son of which gods?"],
  answers: ["Hades", "Zeus", "Ares", "Hephaestus",
    "Gorgon", "Satyr", "Driad", "Nymph",
    "Zeus and Aphrodite", "Poseidon and Athena", "Hades and Persephone", "Zeus and Hera"]
};


var quizStart = function() {
  // display the quiz
  $("#quiz").show(1000);
  
  // loop over questions
  for (i = 0; i < quizQA.questions.length; i++) {
    console.log(quizQA.questions[i]);
    // loop over answers
    for (i = 0; i < 4; i++) {
      console.log(quizQA.answers[i]);
    }
  }
};

// when start button is clicked
$("#start").click(function() {
  // hide the intro
  $("#intro").hide("slow");
  // start the quiz
  quizStart();
});