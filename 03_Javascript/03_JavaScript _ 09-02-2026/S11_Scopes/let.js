count = 1;
let uname = "Sid";
console.log(count);

function f1() {
  let x = 999; // global scoped variable
  console.log("Inside the f1 Function : ", count, x);
  if (true) {
    let y = "hello";
    console.log(x, y);
  }

  while (x < 1000) {
    let city = "pune";
    const pin = 123;
    console.log(x, city);
    x++;
  }

  //   console.log(x, y, city);
}
f1();

function f2() {
  console.log("Inside f2 function ", count);
}

// f2();
// console.log("In global scope", x);
