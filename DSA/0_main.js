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
