// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. 
// Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// Understanding the Problem
// k respresents the amount of words to return
// the words returned should be the ones that appear the most frequent (sorted alphabetically)

// soodough
// use an object
// iterate over words array
// if word not in object, initialize with 0 as its value
// if in object, add 1 to its value
// at this point we have an object of words with its frequency as the value
// i'm going to try using object.entries

const topKFrequent = (words, k) => {
  const obj = {};
  const finalArray = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!(word in obj)) obj[word] = 0;
    obj[word] += 1;
  }

  const arr = Object.entries(obj)

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i][0]
    const num = arr[i][1];

  }
  return finalArray;
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)) // Output: ["i","love"]
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)) // Output: ["the","is","sunny","day"]