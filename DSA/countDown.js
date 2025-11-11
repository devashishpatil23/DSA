function countdown(number) {
  if (number <= 0 || isNaN(number)) {
    console.log("Please enter a positive integer.");
    return;
  }

  const interval = setInterval(() => {
    console.log(number);
    number--;

    if (number < 0) {
      clearInterval(interval);
      console.log("Countdown complete!");
    }
  }, 1000);
}

countdown(10);
