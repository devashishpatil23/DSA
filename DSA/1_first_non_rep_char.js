function firstNonRepChar(str){
  for(let ch of str){
    if(str.indexOf(ch)=== str.lastIndexOf(ch)){
      return ch
    }
  }
  return null
}

console.log(firstNonRepChar('hhhhhello'))