function isValidInput(num) {
    return num > 0 && num <= 100000;
}

function convertToRoman(num) {
    // Extended Roman symbols array with subtractive notation
    const romanSymbols = [
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

    // Validate input
    if (!isValidInput(num)) {
        return "Invalid input: Please enter a number between 1 and 100,000.";
    }

    let result = '';

    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}