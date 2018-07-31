function makanTerusRekursif(waktu) {

    for (foodCount = 0; waktu > 0; foodCount++) {
      waktu -= 15
    }
    return foodCount;
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0