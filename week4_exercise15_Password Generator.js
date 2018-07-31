
function changeVocals (str) {
    var vokal = 'aAiIuUeEoO';
    var konsonan = 'bBjJvVfFpP';
    var temp ='';
  
    for (var i = 0; i<str.length; i++){
      var inisial = false;
      for(var j =0; j<vokal.length; j++){
        if(str[i] === vokal[j]) {
          temp += konsonan[j] ;
          inisial = true;
       }
      } 
       if (inisial === false) {
          temp += str[i]; 
       }
    }
    return temp;
  }
  
  function reverseWord (str) {
    var temp = '';
    for (var i=str.length-1; i>= 0; i--){
      temp += str[i];
    }
    return temp;
  }
  
  function setLowerUpperCase (str) {
    var temp = [];  
    for (var j=0; j< str.length; j++){
      if (str[j] ===  str[j].toLowerCase()) {
      temp.push(str[j].toUpperCase());
    }
    else {
      temp.push(str[j].toLowerCase());
    }
   }
    return temp;
  }
  
  function removeSpaces (str) {
    var temp = [];
    for (var k=0; k< str.length; k++){
      if (str[k] !== ' '){
        temp.push(str[k]);
      }
    }
    return temp;
  }
  
  function passwordGenerator (name) {
    if (name.length <= 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    
    var code1 = changeVocals(name);
    var code2 = reverseWord(code1);
    var code3 = setLowerUpperCase(code2);
    var code4 = removeSpaces(code3);

    var hasilCode = '';
    for (var i=0; i< code4.length; i++){
      hasilCode += code4[i];
    }
    return hasilCode;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'