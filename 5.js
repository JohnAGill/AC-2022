const { crates, steps } = require("./5Input");
// Part 1
/*const task5 = () => {
  const test = steps.reduce((result, step) => {
    const amount = step[0];
    const from = step[1] - 1;
    const to = step[2] - 1;
    const crateFrom = crates[step[1] - 1];
    const crateTo = crates[step[2] - 1];
    const moved = crateFrom.slice(crateFrom.length - amount, crateFrom.length);
    result[from] = crateFrom.slice(0, crateFrom.length - amount);
    result[to] = [...crateTo, ...moved.reverse()];
    return result;
  }, crates);
  const answer = test.map((stack) => stack[stack.length - 1]).join("");
  console.log(answer);
};*/

// Part 2
const task5 = () => {
  const test = steps.reduce((result, step) => {
    const amount = step[0];
    const from = step[1] - 1;
    const to = step[2] - 1;
    const crateFrom = crates[step[1] - 1];
    const crateTo = crates[step[2] - 1];
    const moved = crateFrom.slice(crateFrom.length - amount, crateFrom.length);
    result[from] = crateFrom.slice(0, crateFrom.length - amount);
    result[to] = [...crateTo, ...moved];
    return result;
  }, crates);
  const answer = test.map((stack) => stack[stack.length - 1]).join("");
  console.log(answer);
};

task5();
