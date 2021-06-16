//  Add two number

// 1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make first test fail and see if you get the result of second test.
// 5. If not fix it using the test framework (try...catch) we learned in the testing framework video.
function add(numA, numB) {
  return numA + numB;
}
let result;
let expected;
function testAdd() {
  result = add(10, 20);
  expected = 30;
  if (typeof result !== typeof expected) {
    throw new Error(`${typeof result} is not equal to ${typeof expected}`);
  }
}
function test(message, cb) {
  try {
    cb();
    console.log(`OK`, message);
  } catch (error) {
    console.error(error);
    console.log(`X`, message);
  }
}
test(`adding 10 and 20`, testAdd);
function add(numA, numB) {
  return numA * numB;
}
function testMultiply() {
  result = add(10, 20);
  expected = 200;
  if (typeof result !== typeof expected) {
    throw new Error(`${typeof result} is not equal to ${typeof expected}`);
  }
}
test(`multiply 10 and 20`, testMultiply);
