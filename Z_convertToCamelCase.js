function convertStr(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

console.log(convertStr("hello-world"));
