function fpb(angka1, angka2) {
    var hasil = angka1 % angka2
    
    while(hasil !== 0){
      angka1 = angka2
      angka2 = hasil
      hasil = angka1 % angka2
    }
    return angka2
  }
  
  console.log(fpb(50, 40));