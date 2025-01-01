function findLogestWord(text) {
  const words = text.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return console.log(longestWord);
}

findLogestWord("aa zzzzz bbb cccc");
