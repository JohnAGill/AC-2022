const crates = [
  ["D", "T", "R", "B", "J", "L", "W", "G"],
  ["S", "W", "C"],
  ["R", "Z", "T", "M"],
  ["D", "T", "C", "H", "S", "P", "V"],
  ["G", "P", "T", "L", "D", "Z"],
  ["F", "B", "R", "Z", "J", "Q", "C", "D"],
  ["S", "B", "D", "J", "M", "F", "T", "R"],
  ["L", "H", "R", "B", "T", "V", "M"],
  ["Q", "P", "D", "S", "V"],
];

const steps = [
  [1, 3, 5],
  [5, 5, 4],
  [6, 7, 3],
  [6, 1, 3],
  [1, 1, 9],
  [1, 1, 4],
  [3, 6, 9],
  [2, 7, 5],
  [1, 5, 7],
  [1, 7, 2],
  [2, 2, 5],
  [2, 6, 3],
  [6, 8, 9],
  [7, 3, 9],
  [1, 8, 7],
  [8, 9, 7],
  [5, 4, 8],
  [1, 6, 2],
  [2, 8, 4],
  [9, 9, 1],
  [2, 8, 5],
  [1, 8, 5],
  [5, 9, 2],
  [1, 6, 8],
  [5, 1, 7],
  [1, 8, 2],
  [2, 1, 7],
  [1, 2, 6],
  [4, 5, 4],
  [2, 1, 4],
  [13, 7, 8],
  [3, 8, 6],
  [2, 6, 8],
  [10, 3, 5],
  [2, 7, 6],
  [3, 5, 6],
  [10, 8, 1],
  [1, 8, 6],
  [6, 2, 4],
  [1, 5, 8],
  [5, 6, 3],
  [2, 8, 6],
  [1, 7, 9],
  [2, 2, 7],
  [3, 5, 1],
  [2, 7, 2],
  [6, 6, 3],
  [7, 5, 6],
  [5, 3, 2],
  [10, 1, 8],
  [2, 1, 3],
  [8, 3, 7],
  [9, 4, 8],
  [1, 9, 2],
  [2, 7, 8],
  [4, 6, 9],
  [1, 4, 9],
  [5, 7, 4],
  [3, 6, 5],
  [1, 1, 5],
  [14, 4, 8],
  [3, 9, 7],
  [4, 5, 9],
  [2, 4, 1],
  [27, 8, 6],
  [2, 7, 2],
  [2, 7, 4],
  [4, 2, 9],
  [7, 8, 4],
  [10, 4, 1],
  [18, 6, 5],
  [6, 9, 2],
  [1, 9, 5],
  [11, 2, 6],
  [2, 5, 4],
  [1, 2, 8],
  [2, 4, 9],
  [2, 8, 3],
  [1, 6, 8],
  [4, 9, 7],
  [4, 7, 8],
  [7, 5, 1],
  [4, 6, 3],
  [2, 3, 7],
  [6, 5, 3],
  [2, 8, 2],
  [14, 6, 2],
  [3, 8, 1],
  [15, 2, 3],
  [1, 6, 1],
  [14, 3, 2],
  [2, 2, 5],
  [1, 9, 3],
  [13, 1, 3],
  [4, 2, 6],
  [10, 1, 3],
  [2, 6, 9],
  [6, 2, 9],
  [6, 5, 2],
  [2, 6, 8],
  [7, 9, 5],
  [1, 5, 8],
  [2, 7, 6],
  [34, 3, 6],
  [19, 6, 2],
  [12, 6, 9],
  [3, 6, 3],
  [2, 3, 2],
  [1, 6, 5],
  [17, 2, 8],
  [2, 3, 2],
  [8, 9, 4],
  [7, 5, 2],
  [5, 4, 1],
  [4, 1, 6],
  [1, 1, 6],
  [6, 6, 8],
  [2, 8, 4],
  [17, 8, 6],
  [2, 4, 5],
  [17, 6, 9],
  [22, 9, 7],
  [1, 5, 2],
  [20, 2, 7],
  [29, 7, 9],
  [1, 4, 7],
  [3, 8, 3],
  [1, 8, 5],
  [3, 8, 2],
  [2, 2, 4],
  [27, 9, 7],
  [2, 3, 2],
  [1, 5, 2],
  [18, 7, 5],
  [1, 3, 2],
  [1, 5, 6],
  [18, 5, 3],
  [1, 6, 3],
  [2, 9, 5],
  [10, 3, 5],
  [4, 3, 6],
  [1, 7, 1],
  [1, 5, 1],
  [6, 7, 6],
  [1, 6, 2],
  [4, 4, 8],
  [5, 5, 4],
  [1, 3, 8],
  [2, 1, 8],
  [2, 2, 5],
  [3, 3, 8],
  [6, 8, 2],
  [1, 3, 9],
  [1, 6, 3],
  [6, 2, 8],
  [7, 8, 4],
  [8, 5, 2],
  [5, 4, 6],
  [2, 8, 3],
  [2, 3, 9],
  [1, 3, 9],
  [2, 7, 1],
  [2, 1, 2],
  [12, 2, 4],
  [1, 9, 7],
  [1, 6, 2],
  [9, 7, 9],
  [1, 8, 2],
  [9, 9, 8],
  [6, 7, 8],
  [4, 4, 1],
  [6, 2, 5],
  [1, 4, 9],
  [3, 1, 9],
  [6, 4, 5],
  [5, 8, 9],
  [8, 4, 6],
  [3, 9, 8],
  [1, 9, 3],
  [3, 8, 3],
  [5, 9, 2],
  [3, 2, 6],
  [3, 6, 9],
  [3, 6, 2],
  [4, 2, 6],
  [6, 9, 7],
  [1, 1, 8],
  [8, 8, 5],
  [20, 5, 3],
  [2, 2, 8],
  [6, 7, 1],
  [10, 6, 3],
  [4, 6, 7],
  [4, 1, 9],
  [2, 1, 2],
  [3, 6, 9],
  [5, 8, 3],
  [3, 7, 9],
  [17, 3, 2],
  [1, 6, 2],
  [2, 6, 9],
  [1, 6, 4],
  [12, 9, 2],
  [1, 4, 7],
  [8, 3, 8],
  [8, 8, 9],
  [7, 9, 2],
  [1, 9, 7],
  [18, 2, 9],
  [1, 7, 2],
  [2, 7, 1],
  [1, 1, 2],
  [4, 2, 7],
  [15, 9, 3],
  [1, 9, 1],
  [2, 1, 8],
  [6, 2, 4],
  [8, 2, 1],
  [2, 8, 5],
  [2, 9, 3],
  [4, 4, 1],
  [2, 5, 8],
  [2, 8, 9],
  [14, 3, 1],
  [2, 9, 7],
  [2, 4, 3],
  [1, 2, 9],
  [5, 7, 9],
  [21, 1, 9],
  [2, 1, 6],
  [3, 2, 4],
  [1, 7, 3],
  [19, 9, 5],
  [1, 2, 7],
  [1, 7, 2],
  [3, 4, 2],
  [19, 5, 7],
  [2, 2, 5],
  [1, 5, 3],
  [1, 3, 4],
  [8, 9, 4],
  [1, 6, 3],
  [1, 2, 6],
  [1, 2, 1],
  [8, 7, 3],
  [5, 4, 7],
  [2, 6, 4],
  [1, 5, 9],
  [1, 1, 6],
  [1, 1, 2],
  [2, 4, 7],
  [1, 4, 2],
  [2, 4, 9],
  [1, 6, 8],
  [1, 1, 5],
  [1, 8, 6],
  [1, 1, 4],
  [25, 3, 1],
  [1, 4, 2],
  [2, 3, 6],
  [3, 1, 9],
  [6, 9, 8],
  [1, 6, 3],
  [1, 2, 9],
  [15, 7, 6],
  [2, 2, 6],
  [1, 3, 8],
  [1, 1, 4],
  [6, 8, 4],
  [1, 3, 8],
  [1, 8, 5],
  [2, 5, 2],
  [8, 6, 7],
  [1, 8, 7],
  [1, 9, 4],
  [9, 4, 5],
  [19, 1, 3],
  [9, 3, 5],
  [6, 7, 2],
  [2, 1, 7],
  [7, 2, 4],
  [7, 5, 6],
  [5, 4, 3],
  [3, 5, 8],
  [1, 2, 4],
  [2, 4, 8],
  [14, 6, 1],
  [6, 5, 6],
  [1, 5, 2],
  [7, 1, 6],
  [1, 2, 4],
  [4, 6, 4],
  [1, 5, 4],
  [2, 1, 9],
  [2, 9, 4],
  [2, 1, 8],
  [9, 3, 6],
  [3, 7, 4],
  [4, 8, 6],
  [3, 7, 6],
  [1, 7, 2],
  [1, 7, 5],
  [3, 8, 4],
  [26, 6, 1],
  [8, 1, 2],
  [1, 6, 4],
  [5, 2, 7],
  [2, 2, 4],
  [10, 4, 7],
  [1, 6, 1],
  [22, 1, 2],
  [1, 6, 1],
  [6, 4, 7],
  [1, 5, 1],
  [1, 1, 2],
  [21, 7, 2],
  [38, 2, 3],
  [8, 2, 6],
  [2, 4, 8],
  [2, 8, 2],
  [1, 1, 3],
  [1, 2, 8],
  [1, 2, 5],
  [6, 6, 4],
  [2, 4, 2],
  [2, 2, 6],
  [1, 8, 2],
  [28, 3, 1],
  [11, 1, 2],
  [8, 1, 7],
  [4, 6, 4],
  [8, 3, 1],
  [8, 2, 5],
  [6, 5, 4],
  [2, 5, 4],
  [8, 3, 4],
  [22, 4, 1],
  [2, 3, 5],
  [33, 1, 5],
  [26, 5, 6],
  [4, 5, 7],
  [2, 2, 7],
  [2, 7, 2],
  [2, 7, 8],
  [2, 8, 3],
  [6, 1, 3],
  [5, 5, 1],
  [1, 5, 7],
  [7, 7, 5],
  [4, 5, 6],
  [5, 1, 8],
  [4, 2, 4],
  [2, 7, 4],
  [2, 7, 3],
  [5, 4, 6],
  [1, 8, 2],
  [1, 2, 4],
  [10, 3, 6],
  [44, 6, 9],
  [2, 5, 7],
  [1, 5, 8],
  [41, 9, 1],
  [1, 6, 4],
  [2, 8, 1],
  [1, 7, 3],
  [1, 3, 8],
  [2, 9, 8],
  [29, 1, 9],
  [2, 1, 5],
  [2, 8, 3],
  [1, 3, 5],
  [2, 5, 9],
  [1, 5, 7],
  [25, 9, 2],
  [10, 2, 1],
  [1, 7, 8],
  [2, 4, 1],
  [2, 8, 9],
  [1, 8, 6],
  [4, 2, 4],
  [4, 2, 5],
  [1, 6, 5],
  [1, 2, 7],
  [2, 4, 1],
  [18, 1, 3],
  [8, 9, 4],
  [15, 3, 9],
  [3, 4, 8],
  [4, 5, 8],
  [4, 2, 4],
  [10, 9, 4],
  [4, 8, 5],
  [2, 7, 2],
  [11, 4, 9],
  [12, 4, 9],
  [2, 5, 7],
  [4, 2, 4],
  [5, 8, 1],
  [1, 5, 6],
  [1, 4, 6],
  [1, 3, 9],
  [1, 5, 7],
  [4, 1, 6],
  [6, 1, 5],
  [6, 5, 9],
  [3, 7, 6],
  [9, 6, 5],
  [8, 5, 2],
  [7, 2, 3],
  [1, 3, 1],
  [7, 3, 5],
  [2, 4, 1],
  [1, 2, 6],
  [2, 1, 3],
  [8, 5, 9],
  [3, 1, 3],
  [1, 6, 1],
  [2, 4, 1],
  [1, 5, 2],
  [2, 1, 6],
  [2, 6, 3],
  [2, 3, 2],
  [2, 2, 4],
  [1, 2, 6],
  [3, 3, 9],
  [2, 4, 8],
  [3, 3, 1],
  [4, 1, 7],
  [2, 8, 4],
  [7, 9, 6],
  [1, 1, 4],
  [11, 9, 7],
  [3, 9, 3],
  [14, 9, 5],
  [6, 6, 5],
  [4, 5, 9],
  [10, 7, 6],
  [1, 3, 7],
  [2, 4, 1],
  [4, 7, 9],
  [9, 6, 1],
  [3, 6, 5],
  [15, 9, 1],
  [1, 4, 7],
  [4, 9, 7],
  [12, 5, 1],
  [3, 7, 3],
  [4, 7, 2],
  [1, 9, 3],
  [22, 1, 2],
  [21, 2, 6],
  [3, 1, 9],
  [1, 3, 7],
  [1, 7, 3],
  [1, 3, 2],
  [8, 1, 4],
  [1, 9, 2],
  [7, 4, 8],
  [3, 3, 9],
  [3, 3, 5],
  [4, 2, 3],
  [1, 1, 3],
  [4, 8, 5],
  [2, 8, 3],
  [5, 3, 2],
  [6, 5, 3],
  [2, 5, 8],
  [2, 1, 7],
  [2, 7, 4],
  [15, 6, 9],
  [8, 3, 1],
  [3, 5, 9],
  [2, 4, 9],
  [8, 1, 3],
  [8, 9, 8],
  [1, 1, 4],
  [3, 5, 9],
  [4, 8, 1],
  [1, 3, 9],
  [2, 4, 3],
  [2, 8, 6],
  [3, 8, 7],
  [8, 2, 5],
  [3, 5, 2],
  [4, 3, 4],
  [3, 6, 1],
  [2, 5, 9],
  [4, 4, 1],
  [2, 5, 6],
  [1, 5, 4],
  [2, 2, 1],
  [4, 3, 9],
  [1, 7, 3],
  [2, 7, 4],
  [2, 4, 7],
  [1, 6, 7],
  [1, 2, 8],
  [2, 3, 9],
  [14, 1, 8],
  [1, 6, 2],
  [2, 7, 1],
  [3, 8, 3],
  [6, 8, 5],
];
// const steps = [[1, 3, 5]];
// [1, 2,3] === move 1 from 2 to 3

module.exports = { crates, steps };
