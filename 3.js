const { input } = require("./3Input");

/*const taskThree = () => {
  const formated = input.split("\n");
  console.log(
    formated.reduce((result, value) => {
      const first = value.slice(0, value.length / 2);
      const second = value.slice(value.length / 2, value.length);
      const firstArray = first.split("");
      const secondArray = second.split("");
      const intersection = firstArray.filter((element) => secondArray.includes(element));
      var n = intersection[0].toLowerCase().charCodeAt(0) - 96;
      if (intersection[0] === intersection[0].toUpperCase()) {
        return result + n + 26;
      }
      return result + n;
    }, 0)
  );
};*/
// group strings into sets of 3
// find overlap between all 3
// calculate n

const taskThree = () => {
  let shelf = [];
  const chunkSize = 3;
  const formated = input.split("\n");
  for (let i = 0; i < formated.length; i += chunkSize) {
    const chunk = formated.slice(i, i + chunkSize);
    shelf.push(chunk);
  }
  const elf = shelf.reduce((result, value) => {
    return [
      ...result,
      value.reduce((result2, value2) => {
        return [...result2, value2.split("")];
      }, []),
    ];
  }, []);

  const badgeValues = elf.reduce((result, value) => {
    const intersection = value[0].filter((element) => value[1].includes(element));
    const badge = value[2].filter((element) => intersection.includes(element));
    return [...result, badge[0]];
  }, []);
  const answer = badgeValues.reduce((result, value) => {
    var n = value.toLowerCase().charCodeAt(0) - 96;
    if (value === value.toUpperCase()) {
      return result + n + 26;
    }
    return result + n;
  }, 0);
  // const intersection = shelf[0][0].filter((element) => shelf[0][1].includes(element));
  /*console.log(
    formated.reduce((result, value) => {
      const first = value.slice(0, value.length / 2);
      const second = value.slice(value.length / 2, value.length);
      const firstArray = first.split("");
      const secondArray = second.split("");
      const intersection = firstArray.filter((element) => secondArray.includes(element));
      var n = intersection[0].toLowerCase().charCodeAt(0) - 96;
      if (intersection[0] === intersection[0].toUpperCase()) {
        return result + n + 26;
      }
      return result + n;
    }, 0)
  );*/
  console.log(answer);
};

taskThree();
