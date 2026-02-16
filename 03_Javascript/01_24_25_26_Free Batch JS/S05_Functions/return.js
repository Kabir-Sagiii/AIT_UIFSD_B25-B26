function f1() {
  var x = 100;
  console.log(x);
  return function f2() {};
  console.log(x);
}

var result = f1(); //undefined
console.log(result);
