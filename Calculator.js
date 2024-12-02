const add = (numbers) => {
  if (!numbers || numbers.length === 0) return 0;

  let delimiterSeparatedValues = numbers;
  let delimiters = [',', '\n'];

  if (numbers.startsWith('//')) {
    const delimiterEnd = numbers.indexOf('\n');
    const customDelimiter = numbers.substring(2, delimiterEnd);
    delimiters.push(customDelimiter);
    delimiterSeparatedValues = numbers.substring(delimiterEnd + 1);
  }

  const delimiterRegex = new RegExp(`[${delimiters.join('')}]`, 'g');
  const stringNum = delimiterSeparatedValues.split(delimiterRegex);

  const parsedNums = stringNum.map((num) => parseInt(num, 10));

  return parsedNums.reduce((total, num) => total + num, 0);
};

module.exports = add;
