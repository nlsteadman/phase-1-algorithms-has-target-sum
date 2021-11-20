function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Quadratic time complexity
*/

/* 
  Add your pseudocode here
  declare function with arguments array and target
  create a for loop for the first integer
  create a nested for loop for the second integer
  if the first integet plus the second integer equal the target
  return true
  else false
*/

/*
  Add written explanation of your solution here
  The function will have two arguments, an array of numbers and a target number. 
  The function will return true if any two numbers in the array add up to the target number.
  Start with the first number in the array and iterate through the other numbers until one adds up to the target.
  If none add up to the target, move on to the second number.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8, 2, 5, 9], 63));
}

module.exports = hasTargetSum;
