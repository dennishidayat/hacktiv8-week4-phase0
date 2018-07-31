function cariModus(arr){
	var minMod = 0
	var resultMod = 0
	var sameNum = 0

	for(var i = 0; i < arr.length; i++){
		var freqMod = 0
		for(var j = 0; j < arr.length; j++){
			if(arr[i] === arr[j] && i !== j){
				freqMod++
				if(freqMod > minMod){
					minMod = freqMod
					resultMod = i
				}
			}
		}
	}

	if(minMod === 0){
		return -1
	}

	for(var k = 0; k < arr.length; k++){
		sameNum += arr[k]
		if(sameNum / arr.length === arr[k]){
			return -1
		}

	}
	
	return arr[resultMod]
}
console.log(cariModus([10, 4, 5, 2, 4]))