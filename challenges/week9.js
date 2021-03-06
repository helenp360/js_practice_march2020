/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr is required");
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0){
      sum += arr[i];
    }
  }
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string.
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("str is required");
  let patt1 = /[^cgat]/gi;
  let result = str.match(patt1);
  if(result === null){
    return true;
  } else {
    return false;
  }
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs.
 * In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("str is required");
  let patt1 = /[^cgat]/gi;
  let result = str.match(patt1);
  if(result !== null){
    throw new Error("str must be a valid DNA string");
  } else {  
    let dnaArray = str.split("");
    let complementaryDNA = [];
    for (let i = 0; i < dnaArray.length; i++){
      if (dnaArray[i] === "C"){
        complementaryDNA.push("G");
      } else if (dnaArray[i] === "G"){
        complementaryDNA.push("C");
      } else if (dnaArray[i] === "A"){
        complementaryDNA.push("T");
      } else if (dnaArray[i] === "T"){
        complementaryDNA.push("A");
      }
    }
    return complementaryDNA.join("");
  }
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not.
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("n must be a number")
  let arrOfDivisors = [];
  for (let i = 2; i < n; i++){
    arrOfDivisors.push(i);
  }
  for (let i = 0; i < arrOfDivisors.length; i++){
    if (n % arrOfDivisors[i] === 0){
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items.
 * The parameter "fill" should be used as the filler of the arrays.
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let innerArray = [];
  for(let y = 0; y < n; y++){ 
    innerArray[y] = fill;    
  }  
  let outerArray = [];
  for(let x = 0; x < n; x++){   
    outerArray[x] = innerArray; 
  } 
  return outerArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let count = 0;
  for (let i = 0; i < staff.length; i++){
    if (Object.values(staff[i]).flat().includes(day)){
      count++;
    }
  }
  if (count >= 3){
    return true;
  } else {
    return false;
  }
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
