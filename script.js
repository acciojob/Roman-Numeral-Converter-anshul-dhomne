function convertToRoman(num) {
    // Define the roman symbols as an array
    const romanSymbols = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    // Check for valid input
    if (num <= 0 || num > 100000) {
        return "Invalid input"; // Handle out-of-range input
    }

    let result = '';

    // Loop through the roman symbols
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value; // Decrease the number by the value
        }
    }

    return result; // Return the final Roman numeral
}

// You can test your code by running the above function and printing it to console by uncommenting the following line
// console.log(convertToRoman(36));