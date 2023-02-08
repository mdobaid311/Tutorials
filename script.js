// Map object

const userMap = new Map([
  [1, "Mohammed"],
  [2, "Obaid"],
]);

userMap.set(3, "saif");

// console.log("# Map Object")
// console.log(userMap.get(1))
// console.log(userMap.get(2))
// console.log(userMap.get(3))

// Reduce Method

const reduceArray = [23, 13, 122, 51, 74];

const reducedArray = reduceArray.reduce((prev, curr) => prev + curr);

// console.log("# Reduce Method")
// console.log(reducedArray)

const sortArray = [23, 13, 122, 51, 74];

const sortedArray = sortArray.sort((a, b) => a - b);

// console.log("# Sort Method");
// console.log(sortedArray);

// Filter Method

const filterArray = [23, 13, 122, 51, 74];

const filteredArray = filterArray.filter((item) => item > 50);

// console.log("# Filter Method");
// console.log(filteredArray);

// Find Method

const findArray = [23, 13, 122, 51, 74];

const foundArray = findArray.find((item) => item > 50);

// console.log("# Find Method");
// console.log(foundArray);

