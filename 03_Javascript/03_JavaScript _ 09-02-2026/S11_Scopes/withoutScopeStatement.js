count = 1;
var uname = "Sid";
console.log(count);

function f1() {
  var x = 999; // global scoped variable
  console.log("Inside the f1 Function : ", count, x);
  if (true) {
    var y = "hello";
  }

  while (x < 1000) {
    var city = "pune";
    x++;
  }

  console.log(x, y, city);
}
f1();

function f2() {
  console.log("Inside f2 function ", count);
}

// f2();
// console.log("In global scope", x);
