const rl = require('readline-sync');

let userVal = rl.questionFloat("enter your age: ");
if (userVal < 18){
  console.log("you are under age");
} else{
  console.log("you are over age");
}

//npm install json
//npm install readline-sync
