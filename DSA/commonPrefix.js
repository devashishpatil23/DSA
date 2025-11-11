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

// When the array is sorted lexicographically (alphabetically), the first and last strings in the sorted array are the most different from each other. Any common prefix between these two strings will also be a common prefix among all the strings in the array.

// In other words:

// If the first and last strings have a common prefix of length L, it is guaranteed that all other strings in between will also share this prefix.
// Therefore, comparing these two strings is sufficient and more efficient.
