function kaliTerusRekursif(angka) {
    var digits = angka.toString();
    if (digits.length === 1){
      return parseInt(digits);
    }
    else {
      return kaliTerusRekursif(parseInt(digits[0]) * kaliTerusRekursif(parseInt(digits.slice(1, angka.length))));
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6