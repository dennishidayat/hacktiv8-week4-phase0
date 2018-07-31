function checkAB(num) {
    var temp = ''

    for (var i = 0 ; i < num.length ; i++) {
        if (num[i]==='a' || num[i]==='b'){
            temp += i+1;
        } 
    }

    for (var i = 0 ; i < temp.length ; i++) {
        for (var j = 0 ; j < temp.length ; j++) {
            if (temp[i] % temp[j] >= 4) {
                return "true"
            } else if (temp[j] - temp[i] >= 4) {
                return "true"
            } else return "false"

        }
    }
}

  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false