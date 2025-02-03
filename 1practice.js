const str = "hello";

const strObj = str.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;

  return acc;
}, {});

