function f1() {
  var x = 10;
  function inner([a, b, c], { name, city }) {
    console.log("It is inner function");
    console.log(c); //50
    console.log(city);
  }

  return [x, inner];
}

// var data = f1();
// data[1]();

//destructuring

var [value, innerFn] = f1();
innerFn([30, 40, 50], { name: "sagar", city: "pune" });
