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
  let subjectArr = [];
  for (let i = 0; i < people.length; i++){
    if (people[i].subjects.length > 1){
          subjectArr.push(people[i].subjects);
    } 
  }
if (subjectArr.length < 1){
  return 0;
} else {
  return subjectArr.toString().split(",").length;
}
}

// function getTotalSubjects(people) {
//   if (people === undefined) throw new Error("people is required");
//   let subjectArr = [];
//   for (let i = 0; i < people.length; i++){
//     if (people[i].subjects.length > 1){
//           subjectArr.push(people[i].subjects);
//     } 
//   }
//   console.log(subjectArr);
// if (subjectArr.length < 1){
//   return 0;
// } else {
//   return subjectArr.toString().split(",").length;
// }
// }

// function getSubjects (person) {
//   return Object.values(person);
// }

// console.log(people.map(getSubjects));

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let valueArray = [];
  for (let i = 0; i < menu.length; i++){
    valueArray.push(Object.values(menu[i])); 
  }
  return valueArray.includes(ingredient);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++){
    let num = arr1[i];
    for (let i = 0; i < arr2.length; i++){
      if (num === arr2[i] && resultArr.includes(num) === false){
        resultArr.push(num);
      }
    }
  }
  return resultArr.sort();
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
