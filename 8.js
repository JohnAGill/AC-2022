const { input } = require("./8Input");

const sum = (array) => {
  return array.reduce((result, value) => {
    return result + value;
  }, 0);
};

const task8 = () => {
  const gridLength = 99;
  const checkLeft = (tree, position, trees) => {
    const row = position >= gridLength ? position / gridLength : 0;
    const start = row >= 1 ? gridLength * Math.floor(row) : 0;
    const toTheLeft = trees.substring(start, position);
    const toTheLeftB = toTheLeft.split("").reverse().join("");

    const results = toTheLeftB.split("").reduce((result, left) => {
      if (Number(left) < Number(tree)) {
        return [...result, 1];
      }
      return [...result, 0];
    }, []);
    if (position === 17) console.log(toTheLeftB);
    return results;
  };
  const checkRight = (tree, position, trees) => {
    const row = position >= gridLength ? position / gridLength : 0;
    const start = row >= 1 ? gridLength * Math.floor(row) : 0;
    const toTheRight = trees.substring(position + 1, start + gridLength);

    const results = toTheRight.split("").reduce((result, right) => {
      if (Number(right) < Number(tree)) {
        return [...result, 1];
      }
      return [...result, 0];
    }, []);

    return results;
  };
  const checkUp = (tree, position, trees) => {
    let above = [];
    let pos = position - gridLength;
    do {
      above.push(trees.charAt(pos));
      pos = pos - gridLength;
    } while (pos > 0);
    above = above.filter((value) => value !== "" && value !== "\n");

    const results = above.reduce((result, up) => {
      if (Number(up) < Number(tree)) {
        return [...result, 1];
      }
      return [...result, 0];
    }, []);

    return results;
  };
  const checkDown = (tree, position, trees) => {
    let below = [];
    let pos = position + gridLength;
    do {
      below.push(trees.charAt(pos));
      pos = pos + gridLength;
    } while (pos < gridLength * gridLength);
    below = below.filter((value) => value !== "" && value !== "\n");

    const results = below.reduce((result, down) => {
      if (Number(down) < Number(tree)) {
        return [...result, 1];
      }
      return [...result, 0];
    }, []);

    return results;
  };
  const y = gridLength + gridLength + 3 + 3;
  const formatted = input.split("").filter((value) => value !== "\n");
  const answer = formatted.reduce((result, tree, position) => {
    if (position < gridLength || position % gridLength === 0 || (position + 1) % gridLength === 0 || position > gridLength * 98) {
      return result;
    }
    const leftVis = checkLeft(tree, position, input.replaceAll("\n", ""));
    const rightVis = checkRight(tree, position, input.replaceAll("\n", ""));
    const upVis = checkUp(tree, position, input.replaceAll("\n", ""));
    const downVis = checkDown(tree, position, input.replaceAll("\n", ""));
    const leftEnd = leftVis.indexOf(0) + 1 > 0 ? leftVis.indexOf(0) + 1 : leftVis.length;
    const rightEnd = rightVis.indexOf(0) + 1 > 0 ? rightVis.indexOf(0) + 1 : rightVis.length;
    const upEnd = upVis.indexOf(0) + 1 > 0 ? upVis.indexOf(0) + 1 : upVis.length;
    const downEnd = downVis.indexOf(0) + 1 > 0 ? downVis.indexOf(0) + 1 : downVis.length;

    const leftSee = leftVis.slice(0, leftVis.indexOf(0)).length === 0 ? 1 : leftVis.slice(0, leftEnd).length;
    const rightSee = rightVis.slice(0, rightVis.indexOf(0)).length === 0 ? 1 : rightVis.slice(0, rightEnd).length;
    const upSee = upVis.slice(0, upVis.indexOf(0)).length === 0 ? 1 : upVis.slice(0, upEnd).length;
    const downSee = downVis.slice(0, downVis.indexOf(0)).length === 0 ? 1 : downVis.slice(0, downEnd).length;
    const isvis = leftSee * rightSee * upSee * downSee;
    return [...result, isvis];
  }, []);
  console.log(JSON.stringify(answer));
  console.log(
    answer.reduce((result, value) => {
      if (value > result) return value;
      return result;
    }, 0)
  );
  /*const realAnswer = answer.map((viewed) => {
    if (viewed === 0) {
      return 0;
    }
    return 1;
  });
  console.log(realAnswer.reduce((result, seen) => result + seen, 0));
  console.log(1361 + 45 + 45);*/
};

task8();
