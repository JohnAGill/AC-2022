const { input } = require("./taskOneInput");

const sum = (array) => {
  return array.reduce((result, value) => {
    return result + value;
  }, 0);
};

const removeHighest = (totals, first) => {
  return [...totals.slice(0, totals.indexOf(first)), ...totals.slice(totals.indexOf(first) + 1, totals.length - 1)];
};

const task1 = () => {
  const formated = input.split("\n\n").reduce((result, value) => {
    return [...result, value.split("\n")];
  }, []);
  const totals = formated.reduce((result, value) => {
    const pie = value.map((value) => {
      return Number(value);
    });
    const total = sum(pie);
    return [...result, total];
  }, []);
  const first = Math.max(...totals);
  console.log(first);
  const totals2 = removeHighest(totals, first);
  const second = Math.max(...totals2);
  console.log(second);

  const totals3 = removeHighest(totals2, second);
  const third = Math.max(...totals3);
  console.log(third);

  console.log(first + second + third);
};
task1();
