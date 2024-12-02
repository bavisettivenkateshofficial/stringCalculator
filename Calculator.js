const add = (numbers) => {
  if (numbers.length === 0) return 0;
  const stringNum = numbers.split(',');

  const parsedNums = stringNum.map((num) => parseInt(num));

  return parsedNums.reduce((total, num) => total + num, 0);
};

module.exports = add;
