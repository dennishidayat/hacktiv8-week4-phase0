function digitPerkalianMinimum(angka) {
    var pengali = 0;
    var tam = 0;
    var temp = [];
    if (angka % 2 != 1){
        for (var i = 1; i < (angka / 2); i++){
            tam = angka / i;
            temp.push(tam);
        }
        console.log(temp);
    }
  }

console.log(digitPerkalianMinimum(24));