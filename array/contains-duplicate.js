// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Understanding the Problem
// given an array of numbers, return true if a number appears more than one time
// otherwise return false

// Pseudo
// create an empty array
// iterate over the nums array
// for each number, check if it exists in the array we created
// if it doesn't, assign a 1 to it at the index value of the current num
// else if it does return true

const containsDuplicate = (nums) => {
  const dupes = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (dupes[num]) return true;
    dupes[num] = 1;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true