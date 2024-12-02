const extractCustomDelimiter = (input) => {
  const defaultDelimiters = [',', '\n'];
  if (input.startsWith('//')) {
    const delimiterEnd = input.indexOf('\n');
    const customDelimiter = input.substring(2, delimiterEnd);
    return {
      delimiters: [...defaultDelimiters, customDelimiter],
      numberSection: input.substring(delimiterEnd + 1),
    };
  }
  return { delimiters: defaultDelimiters, numberSection: input };
};

const splitNumbers = (numberSection, delimiters) => {
  const delimiterRegex = new RegExp(`[${delimiters.join('')}]`, 'g');
  return numberSection.split(delimiterRegex).map((num) => parseInt(num, 10));
};

const validateNumbers = (numbers) => {
  const negativeNums = numbers.filter((num) => num < 0);
  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(',')}`);
  }
};

const add = (numbers) => {
  if (!numbers) return 0;

  const { delimiters, numberSection } = extractCustomDelimiter(numbers);
  const parsedNums = splitNumbers(numberSection, delimiters);
  validateNumbers(parsedNums);

  return parsedNums.reduce((total, num) => total + num, 0);
};

module.exports = add;
