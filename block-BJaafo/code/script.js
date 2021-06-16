function getFullName(firstName, lastName) {
  return (fullName = `${firstName} ${lastName}`);
}
let result = test(`Akhilesh`, `Burathoki`);
let expected = `Akhilesh burathoki`;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
result = getFullName(`Akhilesh`, `Burathoki`);
expected = `Akhilesh Burathoki`;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
// Ans- We do not see the output of the second test.

function totalAmount(amount, taxRate) {
  return amount + amount * taxRate;
}
let result = totalAmount(50, 10);
let expected = 60;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
result = totalAmount(50, 10);
expected = 550;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
// Ans- We do not see the output of the second test.
