// put the numbers into an array
// arr1 arr2
// sort the smallest to largest nums first

// iterate through the array to split the numbers into the left and right array
const fs = require('fs');

const data = fs.readFileSync('./data.txt').toString().split('\n');

const arr1 = [];
const arr2 = [];

data.forEach((str) => {
  const nums = str.split('  ');
  arr1.push(parseInt(nums[0]));
  arr2.push(parseInt(nums[1]));
});

const sortedLeft = arr1.sort((a, b) => a - b);
const sortedRight = arr2.sort((a, b) => a - b);

console.log({ sortedLeft, sortedRight });

// Now we need to compare the indexes of the two arrays for the difference between the pairs of nums -> difference between those numbers of the same index. Loop and compare

// let total = 0;

// for (let i = 0; i < sortedLeft.length; i++) {
//   const distance = sortedLeft[i] > sortedRight[i] ? sortedLeft[i] - sortedRight[i] : sortedRight[i] - sortedLeft[i];
//   total += distance;
// }

console.log(
  sortedLeft.reduce((acc, cur, i) => {
    acc += Math.abs(cur - sortedRight[i]);
    return acc;
  }, 0)
);