function f1(value1) {
  console.log(value1); //10
  return value1 + 10;
}

function f2(resultOfF1) {
  console.log(resultOfF1); //20
  return resultOfF1 * 20;
}

function f3(resultOfF2) {
  console.log(resultOfF2 + 100); //500
}

var f1Value = f1(10);
var f2Value = f2(f1Value);
f3(f2Value);
