var arr = [10, 20, 30, 40, 50];

// without map()
// var newArray = [];
// arr.forEach(function (element) {
//   var result = element * 1000;
//   newArray.push(result);
// });
// console.log(newArray);

const newArray = arr.map(function (element, index) {
  const result = element * 1000;
  return result; //[10000,20000]
});

console.log(newArray);
