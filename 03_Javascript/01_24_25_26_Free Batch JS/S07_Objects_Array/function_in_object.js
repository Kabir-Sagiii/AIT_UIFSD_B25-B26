var obj = {
  id: 101,
  name: "Raj",
  isMarried: true,
  city: null,
  email: undefined,
  hobbies: {
    playing: true,
    reading: false,
  },
  getName: function (x) {
    console.log("Anonymous function as a property value", x);
    return "hellloooo";
  },
};

var value = obj.getName(100);
console.log(value);
