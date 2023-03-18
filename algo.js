// Here's a JavaScript function that can test if a word is a palindrome:

function isPalindrome(word) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanWord = word.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Compare the original and reversed versions of the word
  return cleanWord === cleanWord.split('').reverse().join('');
}

// Here's how you can use the function:

const word1 = 'racecar';
console.log(isPalindrome(word1)); // true

const word2 = 'Hello world!';
console.log(isPalindrome(word2)); // false
