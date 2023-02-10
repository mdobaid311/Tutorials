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

// For Each Method

const forEachArray = [23, 13, 122, 51, 74];

forEachArray.forEach((item) => {
  // console.log(item);
});

// Map Method

const mapArray = [23, 13, 122, 51, 74];

const mappedArray = mapArray.map((item) => item * 2);

// console.log("# Map Method");
// console.log(mappedArray);

// Some Method

const someArray = [23, 13, 122, 51, 74];

const someArrayResult = someArray.some((item) => item > 50);

// console.log("# Some Method");
// console.log(someArrayResult);

// Every Method

const everyArray = [23, 13, 122, 51, 74];

const everyArrayResult = everyArray.every((item) => item > 50);

// console.log("# Every Method");
// console.log(everyArrayResult);

// Includes Method

const includesArray = [23, 13, 122, 51, 74];

const includesArrayResult = includesArray.includes(122);

// console.log("# Includes Method");

// console.log(includesArrayResult);

// Spread Operator

const spreadArray = [23, 13, 122, 51, 74];

const spreadArrayResult = [...spreadArray, 100, 200];

// console.log("# Spread Operator");
// console.log(spreadArrayResult);

// Rest Operator

const restArray = [23, 13, 122, 51, 74];

const [first, second, ...rest] = restArray;

// console.log("# Rest Operator");
// console.log(first);
// console.log(second);
// console.log(rest);

// Destructuring

const destructuringArray = [23, 13, 122, 51, 74];

const [firstItem, secondItem] = destructuringArray;

// console.log("# Destructuring");
// console.log(firstItem);
// console.log(secondItem);
