// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// 1. Understanding the problem
// day is the index + 1
// find the lowest num, and then find the highest num that follows it,
// if it is before, it is not valid, it must have a higher index than the lowest num
// return the profit, highest num - lowest num

// 2. Psuedo
// creating an empty obj
// find the lowest num in the array, assign it to obj with its index as its value
// for loop with i starting at lowest num's index + 1
// if num is larger than lowest num return profit
// else return 0

const maxProfit = (prices) => {
  debugger;
  let lowestNum = Infinity;
  let lowestNumI = 0;
  let highestNum = 0;

  for (let i = 0; i < prices.length; i++) {
    const num = prices[i];
    if (num < lowestNum) {
      lowestNum = num;
      lowestNumI = i;
    }
  }

  if (lowestNumI === prices.length - 1) return 0;

  for (let i = lowestNumI + 1; i < prices.length; i++) {
    const num = prices[i];

    if (num > lowestNum && num > highestNum) {
      highestNum = num;
    }
  }

  if (highestNum !== 0) return highestNum - lowestNum;

  return 0;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5

console.log(maxProfit([7, 6, 4, 3, 1])) // 0

console.log(maxProfit([2, 4, 1])) // 2