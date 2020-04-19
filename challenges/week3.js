function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => Math.pow(num, 2));
}
//["my", "variable"])).toBe("myVariable")
//empty array
//push words[0]
//then i = 1 for loop
//inside that loop capitalise first letter then return rest
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newArr = [];
  newArr.push(words[0]);
  for (let i = 1; i < words.length; i++){
    newArr.push(words[i][0].toUpperCase() + words[i].slice(1, words[i].length));
  }
  return newArr.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
