const readLineSync=require('readline-sync');
let name=readLineSync.question('Enter your name:-')
console.log(`Hello ${name} welcome to the JavaScript quiz,you will be given 4 options and you have to select the right option`)

const questions=[`Q1.Which of the following is true about cookie handling in JavaScript?
1-JS can manipulate cookies using the cookie property of the Document object 
2-JS can read,create,modify,and delete the cookie or cookies that apply to the current web page
3-Both of the above
4-None of the above
`,
`Q2.Which built-in method adds one or more elements to the end of an array and returns the new length of the array?
1-last()
2-put()
3-push()
4-None of the above
`,
`Q3.Which built-in method returns the string representation of the number's value?
1-toValue()
2-toNumber()
3-toString()
4-None of the above
`,
`Q4.Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?
1-charAt()
2-charCodeAt()
3-concat()
4-indexOf()
`,
`Q5.Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?
1-slice()
2-split()
3-replace()
4-search()
`
,
`Q6.Which of the following function of String object returns the primitive value of the specified object?
1-toLocaleUpperCase()
2-toUpperCase()
3-toString()
4-valueOf()
`
];
let correct=0;
let wrong=0;

const correctAnswers=[3,3,3,2,2,4];
const givenAnswers=[];
for(let i=0;i<questions.length;i++){
  let ele=readLineSync.question(questions[i]);
  givenAnswers.push(ele);
  if(givenAnswers[i]==correctAnswers[i]){
    correct++;
    console.log("Response is correct");
  }
  else{
wrong++;
console.log("Response is incorrect");
  }
}

console.log(`Hi ${name}, you answered ${correct} questions correct and ${wrong} questions wrong `)


