const rl = require('readline-sync');
const math = require('mathjs');

const ave = 'average';
const quit = 'exit';
const modeF = 'mode';

let userInput;
let avgMark = 0;
let counter = 0;
let sumArr = [];

while(true){
  userInput = rl.question('Please enter your mark: ');
    if(userInput == ave){
      for(i = 0; i < sumArr.length; i++){
        avgMark += sumArr[i] / counter;
      }
      math.round(avgMark);
      console.log(avgMark);
    } else if(userInput === quit){
      break;
    } else if (userInput === modeF){
      let y = math.mode(sumArr);
      console.log('The mode of the marks are: '+ y);
    } else if (userInput > 0 && userInput <= 100){
      sumArr.push(userInput);
      counter++;
    } else {
      console.log('The mark is not between 0 and 100');
    }
}

