function isPalindrome(word) {
  let lettersArr = Array.from(word)
  // console.log(lettersArr)
  let reversedArr = lettersArr.reverse()
  // console.log(reversedArr)
  let reversedWord = reversedArr.join("")
  // console.log(reversedWord)
  if (word === reversedWord) {return true} else {return false}
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
