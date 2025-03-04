function reverseWords(str) {
  let words = str.split(" ");
  s;
  let reversedWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }

  return reversedWords.join(" ");
}
console.log(reverseWords("JavaScript is awesome"));
