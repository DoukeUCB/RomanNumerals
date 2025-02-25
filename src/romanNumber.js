function romanNumber(num) {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (num >= 1 && num <= 9) {
        return romanNumerals[num - 1];
    } else {
        return 'Invalid input';
    }
}

export default romanNumber;