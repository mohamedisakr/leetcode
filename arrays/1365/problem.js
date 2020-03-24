// my first implementation
/**
 * Given the array nums, for each nums[i] find out how many numbers in the
 * array are smaller than it. That is, for each nums[i] you have to count
 * the number of valid j's such that j != i and nums[j] < nums[i].
 * Return the answer in an array.
 * @param {number[]} nums
 * @return {number[]}
 */
/*
function smallerNumbersThanCurrent(nums) {
  //   let sortedNumbers = nums.sort();
  //   console.log(sortedNumbers);

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
// */
// /*
function smallerNumbersThanCurrent(nums) {
  const sortedNumbers = nums.sort();
  console.log(sortedNumbers);

  // define the resulting array
  const result = [];
  // [1, 2, 2, 3, 8]
  // [0, 1, 1, 3, 4]
  // for every item in sortedNumbers array

  // npm run test
  debugger;
  for (let i = 0; i < sortedNumbers.length; i++) {
    result.push(search(sortedNumbers, sortedNumbers[i]));
  }
  // return the resulting array
  return result;
}
// */

/**
 *
 * @param {*} list
 * @param {*} key
 */
function search(list, key) {
  let lo = 0;
  let hi = list.length - 1;
  if (key < list[lo] || key > list[hi]) {
    return -1;
  }
  //alert('test');
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (key < list[mid]) {
      hi = mid - 1;
    } else if (key > list[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

module.exports = { smallerNumbersThanCurrent, search };

// return {
//   smallerNumbersThanCurrent: smallerNumbersThanCurrent,
//   search: search
// };
// module.exports = smallerNumbersThanCurrent, search;
// export default smallerNumbersThanCurrent;

// */

/*
const smallerNumbersThanCurrent = nums => {
  const map = new Map(
    nums
      .slice()
      .sort((a, b) => a - b)
      .map((val, idx) => [val, idx])
      .reverse()
  );
  console.log(map);

  return nums.map(n => map.get(n));
};
*/

/*
var smallerNumbersThanCurrent = function(nums) {
  // create a new instance form nums and sort it
  const sortedNums = Array.from(nums).sort((a, b) => a - b);
  let result = []; // result array

  //iterate through nums array
  for (let num of nums) {
    // find the index of the current number in the sorted array
    let idx = sortedNums.findIndex(num); //.indexOf(num);
    result.push(idx);
  }
  return result;
};
*/
