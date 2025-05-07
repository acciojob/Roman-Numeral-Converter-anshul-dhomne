function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    // Loop through the romanNumerals array and subtract from num while appending the symbols
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][1]) {
            result += romanNumerals[i][0];  // Append the Roman numeral symbol
            num -= romanNumerals[i][1];    // Subtract the value from num
        }
    }

    return result; // Return the Roman numeral string
}

// Example usage
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
