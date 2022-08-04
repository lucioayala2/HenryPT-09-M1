'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  for (let i=0;i<num.length;i++){
    decimal += parseInt(num[i]) * 2 ** (num.length - 1 - i);
  }
  return decimal;
}

function DecimalABinario(num) {
  let bin = '';
  while (num>0){
      bin += num%2;
      num = Math.floor(num/2);
  }
  return (bin.split("").reverse().join(""));
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}