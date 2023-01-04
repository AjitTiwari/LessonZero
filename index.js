const readlineSync = require('readline-sync');
 
// Wait for user's response.
let score=0;
function checkAnswer(answerByUser,correctAnswer){
    if(answerByUser===correctAnswer){
      score++;
      return "Right answer";
    }
  else{
    return "Worong answer";
  }
}
let answerByUser =readlineSync.question('Enter first Number: ');
let correctAnswer=  "Ajit";
console.log(checkAnswer(answerByUser,correctAnswer));
console.log(score);
