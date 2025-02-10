function findLongestWord(text) {
  let words = text.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("hi my name is devashish"));

// smallest word
function findSmallestWord(str) {
  const words = str.split(" ");
  let small = words[0];

  for (let word of words) {
    if (word.length < small.length) {
      small = word;
    }
  }
  return console.log(small);
}

findSmallestWord("hi bye goodnight");
