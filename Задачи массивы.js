const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].amount > 0) {
      result += data[i].amount;
    }
  }

  return result;
};

const getTotalIncomeAmount = (data) => {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].amount < 0) {
      result = result + data[i].amount;
    } else {
      getPositiveIncomeAmount(funds);
    }
  }
  return result;
};

console.log(getTotalIncomeAmount(funds));
