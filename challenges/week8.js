const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.includes(n) === false){
    return null;
  } else if (nums.includes(n) === true){
    if (nums.indexOf(n) === nums.length - 1){
      return null;
    } else {
      let myIndex = nums.indexOf(n);
      return nums[myIndex + 1]
    }
  }
};


const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let arr = n.toString().split("");
  let backwardsArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    backwardsArr.push(arr[i])
  }
  return parseInt(backwardsArr.join().replace(/,/g, ""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};