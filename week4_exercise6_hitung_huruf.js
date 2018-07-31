function hitungHuruf(kata){
    var ar = [];
    var ar = kata.split(' ');
    var terbesar = 0
    var text = ''
    // console.log(ar.length);
    for (var i = 0; i < ar.length; i++){
        var temp = [];
        for (var j = 0; j < ar[i].length; j++){
            for (var k = 0; k < ar[i].length; k++){
                // console.log(ar[i][j], ar[i][k]);
                if (ar[i][j] === ar[i][k] && j != k){
                    temp.push(ar[i][j]);
                }
            }
        }
        // console.log(temp.length)
        // console.log(ar[i])
        if (terbesar < temp.length){
            terbesar = temp.length
            text = ar[i];
        }
    }
    if (temp === 0){
        return false
    }
    return text;
}

console.log(hitungHuruf('rajin pangkal kaya'));