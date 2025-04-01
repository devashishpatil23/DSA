function truncate(str, limit) {
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
}

console.log(truncate("helooo asasas", 10));

// words

function truncate(str, limit) {
  const words = str.split(" ");
  if (words.length <= limit) return str;

  return words.slice(0, limit).join(" ") + "...";
}

console.log(
  truncate(
    "If the word count is within the limit, return the original string.",
    5
  )
);
