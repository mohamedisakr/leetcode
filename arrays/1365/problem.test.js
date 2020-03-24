// import { smallerNumbersThanCurrent, search } from "./problem.js";
const problem = require("./problem.js");

describe("smallerNumbersThanCurrent", () => {
  test("test case 1", () => {
    const inputArray = [8, 1, 2, 2, 3];
    const outputArray = [4, 0, 1, 1, 3];
    const expectOutput = problem.smallerNumbersThanCurrent(inputArray);
    expect(expectOutput).toEqual(outputArray);
  });

  test("test case 2", () => {
    const inputArray = [6, 5, 4, 8];
    const outputArray = [2, 1, 0, 3];
    const expectOutput = problem.smallerNumbersThanCurrent(inputArray);
    expect(expectOutput).toEqual(outputArray);
  });

  test("test case 3", () => {
    const inputArray = [7, 7, 7, 7];
    const outputArray = [0, 0, 0, 0];
    const expectOutput = problem.smallerNumbersThanCurrent(inputArray);
    expect(expectOutput).toEqual(outputArray);
  });

  test("test case 4", () => {
    const inputArray = [1, 2, 2, 3, 8];
    const outputArray = [0, 1, 1, 3, 4];
    const expectOutput = problem.smallerNumbersThanCurrent(inputArray);
    expect(expectOutput).toEqual(outputArray);
  });
});

// ***************************************************************************************

describe("search", () => {
  test("case 1: odd length", () => {
    const inputArray = [1, 2, 2, 3, 8];
    const key = 3;
    const expectOutput = problem.search(inputArray, key);
    expect(expectOutput).toEqual(3);
  });

  test("case 2: even length", () => {
    const inputArray = [1, 2, 3, 4, 7, 8, 9, 10];
    const key = 7;
    const expectOutput = problem.search(inputArray, key);
    expect(expectOutput).toEqual(4);
  });

  test("case 3: non existing", () => {
    const inputArray = [1, 2, 3, 4, 7, 8, 9, 10];
    const key = 100;
    const expectOutput = problem.search(inputArray, key);
    expect(expectOutput).toEqual(-1);
  });
});
