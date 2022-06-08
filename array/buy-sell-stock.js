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
// create variable to track profit, initialized at 0
// shift the first element of the array
// check the rest of the elements, if it is bigger than the shifted num,
// get the difference, if difference is larger than current profit num, change it to it.

const maxProfit = (prices) => {
  let profit = 0;

  while (prices.length) {
    const currentNum = prices.shift();

    for (let i = 0; i < prices.length; i++) {
      const num = prices[i];
      if (num > currentNum) {
        const difference = num - currentNum;
        if (difference > profit) profit = difference;
      }
    }
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5

console.log(maxProfit([7, 6, 4, 3, 1])) // 0

console.log(maxProfit([2, 4, 1])) // 2

console.log(maxProfit([234, 96, 6, 671, 91, 96, 15, 2, 6, 96]))