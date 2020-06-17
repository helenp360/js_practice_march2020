/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n != "number") throw new Error("n must be a number");
  let arr = n.toString().split("");
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += parseInt(arr[i]);
  }
  return total;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step.
 * Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (end < start) throw new Error("end must be greater than start");
  if (step === undefined){
    step = 1;
  }
  let arr = [];
  for (let i = start; i <= end; i += step){
    arr.push(i);
  }
  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let usernameArr = [];
  
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].screenTime.length; j++) {
      if (users[i].screenTime[j].date == date) {
        let usageArr = Object.values(users[i].screenTime[j].usage);
        if (usageArr.reduce((a, b) => a + b) > 100) {
          usernameArr.push(users[i].username)
        }
      }
    }
  }
  return usernameArr;
};




/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16.
 * If you want to know more about hexadecimal notation: https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red,
 * the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.length !== 7 || hexStr[0] !== "#") throw new Error ("invalid hexStr");

  let hexArr = hexStr.split("");
  for (let i = 1; i < hexArr.length; i++){
    if (hexArr[i] === "A"){
      hexArr[i] = 10;
    } else if (hexArr[i] === "B"){
      hexArr[i] = 11;
    } else if (hexArr[i] === "C"){
      hexArr[i] = 12;
    } else if (hexArr[i] === "D"){
      hexArr[i] = 13;
    } else if (hexArr[i] === "E"){
      hexArr[i] = 14;
    } else if (hexArr[i] === "F"){
      hexArr[i] = 15;
    } else {
      hexArr[i] = parseInt(hexArr[i]);
    }
  }

  let rValue = (hexArr[1] * 16) + hexArr[2];
  let gValue = (hexArr[3] * 16) + hexArr[4];
  let bValue = (hexArr[5] * 16) + hexArr[6];

  let rgbResult = `rgb(${rValue},${gValue},${bValue})`;
  return rgbResult;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (Array.isArray(board) != true) throw new Error("board must be an array");
  if (board.length !== 3 || board[0].length !== 3 || board[1].length !== 3 || board[2].length !== 3) throw new Error("board is invalid");

  for (let i = 0; i < board.length; i++) {
    let xSum = 0;
    let ySum = 0;
    for (let j = 0; j < board.length; j++) {
        xSum += convertToNumber(board[i][j]);
        ySum += convertToNumber(board[j][i]);
    }
    if (xSum == board.length || ySum == board.length) {
      return 'X'
    } else if (xSum == -board.length || ySum == -board.length) {
      return '0';
    }
  }

  let diagonalX = convertToNumber(board[0][2]) + convertToNumber(board[1][1]) + convertToNumber(board[2][0]);
  let diagonalY = convertToNumber(board[0][0]) + convertToNumber(board[1][1]) + convertToNumber(board[2][2]);

  if (diagonalX == board.length || diagonalY == board.length) {
    return 'X'
  } else if (diagonalX == -board.length || diagonalY == -board.length) {
    return '0';
  }
  
  return null;
};

const convertToNumber = letter => {
  if (letter == "X"){
    return 1;
  } else if (letter == "0"){
    return -1;
  } else {
    return 0;
  }
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
