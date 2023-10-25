/* taking user Input */
let readlineSync = require("readline-sync");

/* Add Color using Kuler Module */
let kuler = require("kuler");

let score = 0;

let userName = readlineSync.question(`What's your name? `);
console.log(kuler(`Hello, ${userName} - welcome to Quizify!`, "fdcbad"));

/* Creating Data Set */
const databases = {
  //   category: {
  //     name: "JavaScript",
  //   },
  data: [
    {
      question: `let a = {}, b = {} 
console.log(a == b)
console.log(a === b)`,
      options: {
        a: "fasle fasle",
        b: "fasle true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: `Object.assign(targer, source) creates which type of copy?`,
      options: {
        a: "deep copy",
        b: "shallow copy",
        c: "nested copy",
        d: "create a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: `Is method chaining possible with forEach?`,
      options: {
        a: "yes",
        b: "no",
      },
      correctAnswer: "b",
    },
  ],
};

/* leaderBoard */
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 1,
    },
    {
      name: "Riya",
      score: 3,
    },
    {
      name: "Neha",
      score: 2,
    },
  ],
};

/* Answer validation correct or not */
function chooseCorrectOptions(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#059669"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(kuler(`Correct Answer is - ${correctAnswer}`, "#1d4ed8"));
  }
}

/* Show all of these things */
function showQuestionsAndOptions(databases) {
  for (let i = 0; i < databases.data.length; i++) {
    console.log(`\nQ${i + 1} - ${databases.data[i].question}\n`);

    for (let key in databases.data[i].options) {
      console.log(`${key} - ${databases.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question(`Enter your answer - (a/b/c/d - only one options correct) - `)
      .toLowerCase();
    chooseCorrectOptions(userAnswer, databases.data[i].correctAnswer);
  }
}

/* HighScore */
function highScore(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  //   console.log(leaderBoard);
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  //   console.log(sortedScoreList);
  console.log(kuler("\nCheck yoyr position on Leader Board🎉🎉", "#facc15"));
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} - ${leader.score}`, "#a21caf"));
  }
}

showQuestionsAndOptions(databases);
console.log(kuler(`\nYour Score is - ${score}`, "#14b8a6"));

/* show leaderBoard */
highScore(leaderBoard);
