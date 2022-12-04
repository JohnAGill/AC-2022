const { input } = require("./4Input");
// Part 1
/*const task4 = () => {
 
  const formated = input.split("\n");
  
  const answer = formated.reduce((result, value) => {
    const tasks = value.split(",");
    const firstTasks = tasks[0].split("-");
    const secondTasks = tasks[1].split("-");
    let list = [];
    let list2 = [];
    let secondFirst = true;
    let firstSecond = true;
    for (let i = Number(firstTasks[0]); i <= Number(firstTasks[1]); i++) {
      list.push(i);
    }
    for (let i = Number(secondTasks[0]); i <= Number(secondTasks[1]); i++) {
      list2.push(i);
    }

    for (let i = 0; i < list.length; i++) {
      if (!list2.includes(list[i])) {
        secondFirst = false;
      }
    }
    for (let i = 0; i < list2.length; i++) {
      if (!list.includes(list2[i])) {
        firstSecond = false;
      }
    }
    if (firstSecond || secondFirst) {
      return result + 1;
    }
    return result;
  }, 0);
  console.log(answer);
};*/

// Part John didn't read the question, solves for grouping 2 sets of tasks into a group and finding overlapping values
/*const task4 = () => {
  const chunkSize = 2;
  let shelf = [];

  const formated = input.split("\n");
  for (let i = 0; i < formated.length; i += chunkSize) {
    const chunk = formated.slice(i, i + chunkSize);
    shelf.push(chunk);
  }
  const answer = shelf.reduce((result, value) => {
    const firstTasks = value[0].split(",");
    const secondTasks = value[1].split(",");
    const l = firstTasks[0].split("-");
    const m = firstTasks[1].split("-");
    const n = secondTasks[0].split("-");
    const o = secondTasks[1].split("-");

    let list = [];
    let list2 = [];
    let list3 = [];
    let list4 = [];
    let secondFirst = false;
    let firstSecond = false;
    for (let i = Number(l[0]); i <= Number(l[1]); i++) {
      list.push(i);
    }
    for (let i = Number(m[0]); i <= Number(m[1]); i++) {
      list2.push(i);
    }
    for (let i = Number(n[0]); i <= Number(n[1]); i++) {
      list3.push(i);
    }
    for (let i = Number(o[0]); i <= Number(o[1]); i++) {
      list4.push(i);
    }
    const list5 = [...list, ...list2];
    const list6 = [...list3, ...list4];
    for (let i = 0; i < list5.length; i++) {
      if (list6.includes(list5[i])) {
        secondFirst = true;
      }
    }
    for (let i = 0; i < list6.length; i++) {
      if (list5.includes(list6[i])) {
        firstSecond = true;
      }
    }
    if (firstSecond || secondFirst) {
      return result + 1;
    }
    return result;
  }, 0);
  console.log(answer);
};*/

// Part 2
const task4 = () => {
  const formated = input.split("\n");

  const answer = formated.reduce((result, value) => {
    const tasks = value.split(",");
    const firstTasks = tasks[0].split("-");
    const secondTasks = tasks[1].split("-");
    let list = [];
    let list2 = [];
    let secondFirst = false;
    let firstSecond = false;
    for (let i = Number(firstTasks[0]); i <= Number(firstTasks[1]); i++) {
      list.push(i);
    }
    for (let i = Number(secondTasks[0]); i <= Number(secondTasks[1]); i++) {
      list2.push(i);
    }

    for (let i = 0; i < list.length; i++) {
      if (list2.includes(list[i])) {
        secondFirst = true;
      }
    }
    for (let i = 0; i < list2.length; i++) {
      if (list.includes(list2[i])) {
        firstSecond = true;
      }
    }
    if (firstSecond || secondFirst) {
      return result + 1;
    }
    return result;
  }, 0);
  console.log(answer);
};

task4();
