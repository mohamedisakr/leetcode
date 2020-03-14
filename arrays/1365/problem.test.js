// import { smallerNumbersThanCurrent } from "./problem.js";
const smallerNumbersThanCurrent = require("./problem");

test("test case 1", () => {
  const inputArray = [8, 1, 2, 2, 3];
  const outputArray = [4, 0, 1, 1, 3];
  const expectOutput = smallerNumbersThanCurrent(inputArray);
  expect(expectOutput).toEqual(outputArray);
});

test("test case 2", () => {
  const inputArray = [6, 5, 4, 8];
  const outputArray = [2, 1, 0, 3];
  const expectOutput = smallerNumbersThanCurrent(inputArray);
  expect(expectOutput).toEqual(outputArray);
});

test("test case 3", () => {
  const inputArray = [7, 7, 7, 7];
  const outputArray = [0, 0, 0, 0];
  const expectOutput = smallerNumbersThanCurrent(inputArray);
  expect(expectOutput).toEqual(outputArray);
});
