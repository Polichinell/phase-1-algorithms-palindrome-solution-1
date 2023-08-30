function isPalindrome(word) {
  // reverse the input string
 const rword = word.toLowerCase();
  const reverse = rword.split('').reverse().join('');
 
  // compare the reversed string to the input
  return rword === reverse;
}

module.exports = isPalindrome;
