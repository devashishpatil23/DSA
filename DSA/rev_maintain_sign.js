function revStr(input) {
  // Convert number to string first
  const str = input.toString();

  // Check if number is negative
  const isNegative = str[0] === "-";

  // Reverse digits (ignoring sign)
  const reversedDigits = str
    .replace("-", "") // remove minus sign if present
    .split("") // convert to array
    .reverse() // reverse digits
    .join(""); // back to string

  // Convert to number and apply sign
  const result = isNegative ? -Number(reversedDigits) : Number(reversedDigits);

  console.log(result);
  return result;
}

revStr(123); // 321
revStr(-123); // -321
revStr(120); // 21
