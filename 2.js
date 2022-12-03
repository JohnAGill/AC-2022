const { input } = require("./2Input");

const getWinner = (me) => {
  if (me === "X") {
    return 0;
  }
  if (me === "Y") {
    return 3;
  }
  return 6;
};

const getMyPlayed = (me, opp) => {
  if (me === 0) {
    return opp !== 1 ? opp - 1 : 3;
  }
  if (me === 3) return opp;
  if (me === 6) {
    return opp === 3 ? 1 : opp + 1;
  }
};

const taskTwo = () => {
  const map = { A: 1, B: 2, C: 3 };
  const formated = input.split("\n");
  const results = formated.reduce((result, value) => {
    const opp = value.charAt(0);
    const you = value.charAt(2);
    const winner = getWinner(you);
    const played = getMyPlayed(winner, map[opp]);
    return winner + played + result;
  }, 0);
  console.log(results);
};

taskTwo();
