function f1(x, y) {
  console.log(x, y);
}

f1(100, 200);

f1(100, "hiiii");

f1(true, false);

f1("hello", true);

f1(function () {
  console.log("Anonymous");
}, 100);

f1(200, function fn() {
  console.log("Named");
});

function f2() {
  console.log("i am f2");
}

f1(f2, 300);
