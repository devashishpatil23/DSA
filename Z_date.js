const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDay()).padStart(2, "0");
const today = `${day}-${month}-${year}`;

console.log(today);
