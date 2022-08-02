// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].


// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Understanding the problem
// I'm given an array of nums, representing a large integer i.e  123 -> [1, 2, 3]
// I am to return an array, incrementing that digit by one i.e [1, 2, 3] -> [1, 2, 4]

// Examples
// 1029 --> [1, 0, 2, 9] -> [1, 0, 3, 0]
// 999 -> [9, 9, 9] -> [1, 0, 0, 0]
// **an edge case when num getting incremented is a 9
// 0 -> [0] -> [1]

// Another edge case
// what if you reach start of array? what do you do?
// for ex. [9] needs to return [1, 0]
// [9, 9] needs to return [1, 0, 0]
// so you need to add a num to the array
// in this scenario the number added will always
// be at the start of the array i.e array.unshift()
// AND will always be a 1

// Approach
// Not thinking of 9's
// grab last value in array, increment by 1, return array

// Approach when taking 9s into account
// gut feeling says recursion

const plusOne = (digits, i = digits.length - 1) => {
  if (i < 0) {
    digits.unshift(1)
    return digits
  }
  if (digits[i] !== 9) {
    digits[i] += 1
    return digits
  }
  if (digits[i] === 9) {
    digits[i] = 0
  }
  return plusOne(digits, i -= 1)
}

console.log(plusOne([1, 2, 3])) // [1,2,4]
console.log(plusOne([4, 3, 2, 1])) // [4,3,2,2]
console.log(plusOne([1, 3, 9])) // [1, 4, 0]
console.log(plusOne([0]))
console.log(plusOne([9, 9, 9, 9]))
console.log(plusOne([9])) // [1, 0]