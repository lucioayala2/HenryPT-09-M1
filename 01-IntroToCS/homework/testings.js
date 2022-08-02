function BinarioADecimal(num) {
    // tu codigo aca
    let decimal = 0;
    for (let i=0;i<num.length;i++){
      decimal += num[i] * 2 ** (num.length - 1 - i);
    }
    console.log(decimal);
    return decimal;
  }
  BinarioADecimal('1100');