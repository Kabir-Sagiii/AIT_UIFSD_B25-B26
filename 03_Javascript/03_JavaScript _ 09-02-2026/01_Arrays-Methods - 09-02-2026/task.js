var data = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//access each element from array and print in the terminal

// var elem1 = data[0];
// console.log(elem1);

// console.log(data[1]);
// console.log(data[2]);

data.forEach(function (element, index) {
  console.log(element * 100);
});
