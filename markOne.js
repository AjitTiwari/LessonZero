const readlineSync = require('readline-sync');

console.log("-----------------Welcome to the game(Score or go Home)-----------------------------");
console.log("All question are about Virat Kolhi");
let celebrityQues = [{
  question: "Where does he live?",
  answer: "Delhi"
}, {
  question: "Firstname of her wife?",
  answer: "Anuskha"
}, {
  question: "What is his favourite shot?",
  answer: "Cover Drive"
}, {
  question: "Name of his cricket Inspiration",
  answer: "Sachin"
}, {
  question: "Firstname of his best cricket friend",
  answer: "Dhoni"
}];
let score = 0;

function playGame(answerByUser, answer) {
 
  if (answerByUser===answer) {
    score++;
    console.log("You are correct");
  }
  else {
    console.log("You are wrong");
  }
}

for (let start = 0; start < celebrityQues.length; start++) {
  let currQues = celebrityQues[start];
  let answerByUser = readlineSync.question(currQues.question+": ");
  playGame(answerByUser, currQues.answer);
}

console.log("Your final score is: ", score);
