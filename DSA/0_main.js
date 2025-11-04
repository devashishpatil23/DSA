function countdown(num) {
  if (num <= 0) {
    console.log("enter correct number");
    return;
  }

  const interval = setInterval(() => {
    console.log(num);
    num--;
  }, 1000);
  if (num < 0) {
    clearInterval(interval);
  }
}

countdown(10);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  let a = true;

  setTimeout(() => {
    a = false;
  }, 2000);

  while (a) {
    console.log("-- inside whilee --");
    await sleep(100); // allow event loop to run
  }
}

run();
