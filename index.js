const readLineSync=require('readline-sync');

const quizData=[
  {
    question:'Which of the following is true about cookie handling in JavaScript?',
    options:['JS can manipulate cookies using the cookie property of the Document object',
    'JS can read,create,modify,and delete the cookie or cookies that apply to the current web page',
    'Both of the above',
    'None of the above']
    ,
    correctAnswer:3

  },
  {
    question:'Which built-in method returns the string representation of the number\'s value?',
    options:['toValue()','toNumber()','toString()','None of the above'],
    correctAnswer:3
  }
 ,
  {
    question:'Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?\n',
    options:['charAt()','charCodeAt()','concat()','indexOf()'],
    correctAnswer:3
  }
  ,
  {
    question:'Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?',
    options:['slice()','split()','replace()','search()'],
    correctAnswer:2
  }
  ,
  {
    question:'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?\n',
    options:['last()','put()','push()','None of the above'],
    correctAnswer:2
  }
  ,
  {
    question:'Which of the following function of String object returns the primitive value of the specified object?\n',
    options:['toLocaleUpperCase()','toUpperCase()','toString()','valueOf()'],
    correctAnswer:4
  }
]
const welcomeUser=(name)=>{
  console.log(`Hello ${name}!\nWelcome to the JavaScript quiz!\nYou will be given n options and you have to select the right option.\n`);

}

const displayQuestion=(i,question)=>{
    console.log(`Q${i+1}.${question}\n`);
}
const displayOptions=(options)=>{
  let j=1;
  for(option of options){
      console.log(`${j}. ${option}\n`);
      j++;
  }
}

const getAnswer=(totalOptions)=>{
  return readLineSync.question(`Enter your choice from 1 to ${totalOptions}:\n`,);
}

const checkAnswer=(answer,correctAnswer)=>{
  if(answer==correctAnswer){
    return true;
  }
  return false;
}

const displayCorrectAnswer=(options,index)=>{
  console.log(`The correct answer is:${options[index]}`);
}

const displayCurrentScore=(correct,wrong)=>{
  console.log(`Current score is:\nCorrect:${correct}\nWrong:${wrong}\n`);
}

const displayFinalScore=(name,correct,wrong)=>{
  console.log(`Hi ${name}, you answered ${correct} questions correct and ${wrong} questions wrong.`);
}

const main=()=>{

  let name=readLineSync.question('Enter your name:-');
  let correct=0;
  let wrong=0;

  welcomeUser(name);

  for(let i=0;i<quizData.length;i++){
    const {question,options,correctAnswer}=quizData[i];

    displayQuestion(i,question);

    totalOptions=options.length;

    displayOptions(options);

    let answer=getAnswer(totalOptions);
    
    if(checkAnswer(answer,correctAnswer)){
      console.log('\nCorrect Answer!');
      correct++;
    }
    else{
      console.log('\nWrong Answer!');
      displayCorrectAnswer(options,correctAnswer-1);
      wrong++;
    }
    displayCurrentScore(correct,wrong);
  }

  displayFinalScore(name,correct,wrong);
}
main();
