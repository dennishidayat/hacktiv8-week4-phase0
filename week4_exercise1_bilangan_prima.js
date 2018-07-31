function angkaPrima(num) {
  var counter = 0
  if(num === 2){
    return true
  } else {
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false
      }
    }
    return true
  }
}

console.log(angkaPrima(3));