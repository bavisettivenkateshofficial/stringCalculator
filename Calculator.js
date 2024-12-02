const add = (numbers) => {
  if (!numbers || numbers.length === 0) return 0;
  let delimiters = [',', '\n'];

  const delimiterRegex = new RegExp(`[${delimiters.join('')}]`, 'g');
  const stringNum = numbers.split(delimiterRegex);

  const parsedNums = stringNum.map((num) => parseInt(num, 10));

  return parsedNums.reduce((total, num) => total + num, 0);
};

module.exports = add;
