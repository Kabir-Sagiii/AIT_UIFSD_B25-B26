var x = 10;
var y = 90;
switch ("hello") {
  //   x + y // it evaluates the expression : 100
  case 2:
    console.log("case 1 executed");
    break;

  case 100:
    console.log("case 2 is executed");
    break;

  case "hello":
    console.log("case 3 is executed");
    break;

  default:
    console.log("no case is executed");
}
