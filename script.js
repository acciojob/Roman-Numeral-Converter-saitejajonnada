function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let roman = "";
    
    for (let i = 0; i <= 6; i += 2) {  
        let symbol = obj[i][0];
        let value = obj[i][1];
        let nextSymbol = obj[i + 2] ? obj[i + 2][0] : null;
        let nextValue = obj[i + 2] ? obj[i + 2][1] : null;
        
        if (nextValue && num >= value - nextValue) {
            roman += nextSymbol + symbol;
            num -= (value - nextValue);
        }
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
        if (num >= obj[i + 1][1]) {  
            roman += obj[i + 1][0];
            num -= obj[i + 1][1];
        }
    }
    
    return roman;
}

console.log(convertToRoman(36)); // Output: XXXVI

module.exports = convertToRoman;
  