
function ubahHuruf(kata) {
  var huruf = 'abcdefghijklmnopqrstuvwxyz'
  var temp = ''
  
  for(var i = 0; i < kata.length; i++){
    for(var j = 0; j < huruf.length; j++){
      if(kata[i] === huruf[j]){
        temp += huruf[j+1]
      }
    }
  }
  return temp
}

console.log(ubahHuruf('developer'));