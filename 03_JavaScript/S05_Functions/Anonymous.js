var getUser = function () {
  console.log("I am Anonymous used as a variable value");
};

getUser();

function f1(fn) {
  //inside the scope of f1, you can call anywhere fn()
  fn();
}

f1(function () {
  console.log("I am Anonymous used as Function Argument");
});

function f2() {
  return function () {
    console.log("Anonymous function as a returned statement");
  };
}

var x = f2();
console.log(x);
