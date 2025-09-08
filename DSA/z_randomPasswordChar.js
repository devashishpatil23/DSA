function randomPassword(n) {
  const char = `!@#$%^&*()1234567890qwertyuiopasdfghjklzxcvbnm`;
  let password = '';

  for(let i=0; i<=n;i++){
    const random = Math.floor(Math.random()* char.length)
    password += char[random]
  }

  return password;
}
