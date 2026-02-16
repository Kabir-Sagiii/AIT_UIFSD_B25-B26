function createTable(num) {
  var count = 1;
  while (count < 11) {
    var result = num * count;
    console.log(num, "*", count, "=", result);
    count++;
  }
}

createTable(20);
