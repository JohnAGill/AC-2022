const { input } = require("./6Input");

const isUnique = (str) => {
  return new Set(str).size == str.length;
};
const task6 = () => {
  let start = 0;
  let answer;
  for (let i = 13; i < input.length; i++) {
    const cha = input.slice(start, i + 1);
    if (isUnique(cha)) {
      console.log(cha);
      answer = i + 1;
      break;
    }
    start = start + 1;
  }
  console.log(answer);
};

task6();
