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
  let myCountObj = {
    1: 0,
    0: 0
  }
  let myArr = str.split("");
  let numOf1s = 0;
  let numOf0s = 0;
  for (let i = 0; i < myArr.length; i++){
    if (myArr[i] === "1"){
      numOf1s++;
    } else if (myArr[i] === "0"){
      numOf0s++;
    }
  }
  myCountObj[1] = numOf1s;
  myCountObj[0] = numOf0s;
  return myCountObj;
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
  let total = 0;
  let newArr = arrs.flat();
  for (let i = 0; i < newArr.length; i++){
    total += newArr[i];
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let newArr = arr.slice(1, arr.length - 1);
  if (arr.length < 2){
    return arr;
  } else {
    newArr.push(arr[0]);
    newArr.unshift(arr[arr.length - 1]);
    return newArr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let objArr = Object.values(haystack);
  let splitObjArr = [];
  for (let i = 0; i < objArr.length; i++){
    if (typeof objArr[i] !== "string"){
      splitObjArr.push(objArr[i]);
    } else {
      splitObjArr.push(objArr[i].toLowerCase().split(" "));
    }
  }
  return splitObjArr.flat().includes(searchTerm.toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let arr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    if (Object.keys(obj).includes(arr[i]) === false){
    obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  return obj;
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