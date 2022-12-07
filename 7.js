const { input } = require("./7Input");

const getDeep = (obj, path) => {
  var current = obj;
  path.split("-").forEach(function (p) {
    current = current[p] ? current[p] : current;
  });
  return current;
};

const createDir = (dir, parent, files) => {
  let ppp = parent;
  if (parent !== "") {
    const fish = parent
      .split("-")
      .reverse()
      .reduce((result, value, key) => {
        if (key === 0) {
          return { [value]: { ...getDeep(files, parent), [dir]: {} } };
        }
        ppp = ppp.slice(0, ppp.lastIndexOf("-"));
        return { [value]: { ...getDeep(files, ppp), ...result } };
      }, {});
    return { ...files, ...fish };
  }
  return { ...files, [dir]: {} };
};
const createfile = (size, name, parent, files) => {
  let ppp = parent;

  if (parent !== "") {
    const fish = parent
      .split("-")
      .reverse()
      .reduce((result, value, key) => {
        if (key === 0) {
          return { [value]: { ...getDeep(files, parent), [name]: size } };
        }
        ppp = ppp.slice(0, ppp.lastIndexOf("-"));

        return { [value]: { ...getDeep(files, ppp), ...result } };
      }, {});
    return { ...files, ...fish };
  }
  return { ...files, [name]: size };
};

const task7 = () => {
  const instructions = input.split("\n");
  let parent = "";
  const withoutLS = instructions.filter((value) => value !== "$ ls" && value !== "$ cd /");
  const without$ = withoutLS.map((value) => value.replace("$ ", ""));
  const ff = without$.reduce((result, instruction) => {
    if (instruction.slice(0, 2) === "cd") {
      if (instruction.slice(3, 5) === "..") {
        parent = parent.substring(0, parent.lastIndexOf("-"));
      } else {
        parent = parent + "-" + instruction.slice(3, instruction.length);
      }
      return result;
    } else if (instruction.slice(0, 3) === "dir") {
      const dir = instruction.slice(3, instruction.length);
      const pp = parent.charAt(0) === "-" ? parent.slice(1, parent.length + 1) : parent;
      return createDir(dir.trim(), pp.trim(), result);
    } else {
      const size = instruction.slice(0, instruction.indexOf(" "));
      const pp = parent.charAt(0) === "-" ? parent.slice(1, parent.length + 1) : parent;
      const name = instruction.slice(instruction.indexOf(" "), instruction.length);
      return createfile(size, name.trim(), pp, result);
    }
  }, {});
  // go through object,
  // go into lowest levels
  // calc total of file size
  // save to new obj with key as path and value as total
  // repeat until all dirs have been size checked

  const goNext = (path, objec, result) => {
    if (typeof objec === "string") {
      if (result[path.slice(0, path.lastIndexOf("-"))]) {
        return { ...result, [path.slice(0, path.lastIndexOf("-"))]: Number(result[path.slice(0, path.lastIndexOf("-"))]) + Number(objec) };
      }
      return { ...result, [path.slice(0, path.lastIndexOf("-"))]: Number(objec) };
    }
    return Object.keys(objec).reduce((result2, value) => {
      return {
        ...result,
        ...goNext(`${path}-${value}`, objec[value], result2),
      };
    }, {});
  };
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const huh = Object.keys(ff).reduce((result, value) => {
    if (typeof ff[value] === "string") {
      return { ...result, [value]: Number(ff[value]) };
    }
    return { ...result, ...goNext(value, ff[value], result) };
  }, {});
  const keys = Object.keys(huh);
  const goBest = (value, obj, result) => {
    // add path to array if not file
    // go into path
    // repeat

    return Object.keys(obj).reduce((prev, a) => {
      if (typeof obj[a] === "string") {
        // do nothing
        return [...result, ...prev].filter(onlyUnique);
      }
      return [...result, `${value}-${a}`, ...goBest(`${value}-${a}`, obj[a], [...result, ...prev, `${value}-${a}`])].filter(onlyUnique);
    }, []);
  };
  const tops = Object.keys(ff).reduce((result, value) => {
    if (typeof ff[value] !== "string") {
      return [...result, value, ...goBest(value, ff[value], result)];
    }
    return result;
  }, []);
  const unique = tops.filter(onlyUnique);
  const poke = keys.filter((kkl) => unique.indexOf(kkl) !== -1);
  const answer = unique.map((value) => {
    const dirs = poke.filter((check) => check.includes(value));
    return dirs.reverse().reduce((result, dir) => {
      return result + huh[dir];
    }, 0);
  });
  console.log(answer);
  const gh = without$.reduce((result, instruction) => {
    if (Number(instruction.charAt(0))) {
      const size = instruction.slice(0, instruction.indexOf(" "));
      return result + Number(size);
    }
    return result;
  }, 0);
  const totalSpace = 70000000;
  const update = 30000000;
  const spaceLeft = totalSpace - gh;
  const yyyyyy = answer.filter((ytrt) => ytrt > update - spaceLeft);
  console.log(
    yyyyyy.reduce((result, value) => {
      if (result < value) {
        return result;
      } else {
        return value;
      }
    }, 9000000000000)
  );
};

task7();
