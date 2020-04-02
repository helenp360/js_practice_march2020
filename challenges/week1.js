function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  if (word === ""){
    return "";
  } else {
  return word[0].toUpperCase() + word.slice(1);
  }
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let newPrice = ((vatRate / 100) * originalPrice) + originalPrice;
  return +newPrice.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let salePrice = originalPrice - ((reduction / 100) * originalPrice);
  return +salePrice.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 0){
    return str[(str.length / 2) - 1] + str[str.length / 2];
  } else if (str.length % 2 !== 0){
    return str[Math.floor(str.length/2)];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reverseArray = [];
  function reverseWord(word){
    reverseArray.push(word.split("").reverse().join(""));
  }  
  words.forEach(reverseWord);
  return reverseArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let num = 0;
  for (let i = 0; i < users.length; i++){
    if (users[i].type === "Linux"){
      num++;
    }
  } return num;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  for (let i = 0; i < scores.length; i++){
    total += scores[i];
  } let mean = total / scores.length;
  return +mean.toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
