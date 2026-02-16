var data = [
  {
    name: "s1",
    city: "pune",
  },
  {
    name: "s2",
    city: "mumbai",
  },
  {
    name: "s3",
    city: "delhi",
  },
  {
    name: "s4",
    city: "hyderabad",
  },
];

var result = data.map(function (element) {
  element.name = element.name + " Reddy";
  return element;
});

console.log(result);
//without map

// var newArray = [];

// var obj1 = data[0];

// obj1.name = "S1 Reddy";

// newArray.push(obj1);

// var obj2 = data[1];
// obj2.name = "S2 Reddy";
// newArray.push(obj2);

// console.log(newArray);
