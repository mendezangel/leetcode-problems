// Every valid email consists of a local name and a domain name, separated by the '@' sign.
// Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, 
// mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. 
// This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], 
// return the number of different addresses that actually receive mails.

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3


// if there is periods '.' in local name, they will be forwarded to the same address without periods in the local name
// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.

// if there is a plus '+' in local name, everything after the first plus sign will be ignored
// For example, "m.y+name@email.com" will be forwarded to "my@email.com".

// soodough
// declare a count variable
// declare an empty object ---> domain as key, local name as the value
// iterate over emails array
// *for first iteration add 1 to count
// for emails[i] split at the @ ----> [test.email+alex, leetcode.com]
// start filtering the local name
// if + present splice there
// split at . and join with ''
// check if domain name is in object, if it is:
// compare the local names, if not the same add 1 to count

// ----> {leetcode.com: testemail}

// UNIQUE EMAIL
// local name the same? compare the domain names and assign domain name to domain object
// local name unique? count++ and assign to objects

const splitEmail = (email) => {
  const emailArr = email.split('@'); // ---> [test.email+alex, leetcode.com]
  for (let j = 0; j < emailArr[0].length; j++) { // iterating over local name
    const character = email[j];
    if (character === '+') {
      emailArr[0] = emailArr[0].slice(0, j)
      emailArr[0] = emailArr[0].split('.').join('')
    } // slicing off everything after the plus sign
  }
  return emailArr;
}

const numUniqueEmails = (emails) => {
  let count = 0;
  const set = new Set;
  for (let i = 0; i < emails.length; i++) {
    if (i === 0) count++;
    const emailArr = splitEmail(emails[i])
    // ex. of where we are right now, ---> [testemail, leetcode.com]
    if (!(set.has(emailArr[0])) && !(set.has(emailArr[1]))) {
      count++;
      set.add(emailArr[0])
      set.add(emailArr(1))
    }

  }
  return count;
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])) // 2
console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])) // 3