var data = [10, 20, 30, 40];

var newArray = data.filter(function (element, index) {
  var status = element < 20;

  return status;
});

console.log(newArray);
