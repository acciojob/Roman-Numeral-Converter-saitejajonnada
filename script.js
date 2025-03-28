function convertToRoman(num) {
  	const symbol = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let roman = "";
	symbols.forEach((item)=>{
		const[symbol,value] = item;
		while(num >= value){
			roman+=symbol;
			num -= value;
		}
	})
    return roman;
}
console.log(convertToRoman(14));
console.log(convertToRoman(798));


console.log(convertToRoman(36)); // Output: XXXVI
module.exports = convertToRoman;
  