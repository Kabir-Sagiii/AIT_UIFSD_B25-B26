//global scope

function f1() {
  var x = 10;
  let y = 100;
  const pin = 123;
  // this is function scope
}
// Global Scope
function f2() {
  // this is function scope
  var count = 5;

  function f3() {
    // this is function scope
  }
}

//global scope
