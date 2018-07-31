function cariMedian(arr) {
    var panjangArr = arr.length % 2
    var hasil
    var resultMedian
    
    
    if(panjangArr === 0){
      
      hasil = arr.length / 2
      hasilMedian = (arr[hasil] + arr[hasil-1]) / 2
      
    } else if(panjangArr === 1){
      
      hasil = Math.floor((arr.length / 2))
      hasilMedian = arr[hasil]
      
    }
    
    return hasilMedian
  }
  
  console.log(cariMedian([1, 2, 3, 4, 5]));
  