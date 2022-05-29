// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один  из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех  значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

// const getPositiveIncomeAmount = (data) => {
//   let result = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].amount > 0) {
//       result += data[i].amount;
//     }
//   }

//   return result;
// };

// const getTotalIncomeAmount = (data) => {

//  let result = 0;
//   for(let i = 0; i < data.length; i++){
//     if(data[i].amount < 0){
//       for(let y = 0; y < data.length; y++){
//        result += data[y].amount

//       }
//       break
//     } else{
//      return getPositiveIncomeAmount(funds);
//     }
//   }

// return result;
// };

// console.log(getTotalIncomeAmount(funds));

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  return data.some((item) => item.amount < 0)
    ? data.reduce((acc, curr) => acc + curr.amount, 0)
    : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));
