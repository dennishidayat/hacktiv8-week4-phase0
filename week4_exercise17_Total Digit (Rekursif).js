function totalDigitRekursif(angka) {
  var digits = angka.toString();;
  if (digits.length === 1){
    return parseInt(digits);
  }
  else {
    return parseInt(digits[0]) + totalDigitRekursif(parseInt(digits.slice(1, angka.length)));
  }
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5