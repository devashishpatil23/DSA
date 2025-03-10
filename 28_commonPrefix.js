function findCommonPrefix(strs) {
  strs.sort();

  let first = strs[0];
  let last = strs[strs.length - 1];
  let commonPrefix = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      commonPrefix += first[i];
    } else {
      break;
    }
  }

  return commonPrefix;
}

console.log(findCommonPrefix(["flower", "flow", "flight"]));
