var obj1 = {
  productName: "Iphone",
  price: 3450,
  rating: 4.5,
};

var obj2 = {
  ...obj1,
  productName: "Samsung Galaxy Ultra",
};

var arr1 = [10, 20, 30, 40];

var arr2 = [true, ...arr1, { x1: "s1" }];

console.log(arr1);

console.log();

console.log(arr2);
