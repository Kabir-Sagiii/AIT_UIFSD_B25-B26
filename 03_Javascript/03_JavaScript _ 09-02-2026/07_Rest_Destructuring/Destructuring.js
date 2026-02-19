var data = [10, "hyderabad", true, 88, "Raj verma"];

var v1 = data[0];

var v2 = data[1];

var v3 = data[2];

// console.log(v1, v2, v3);

// Destructuring Way

var info = [10, "hyderabad", true, 88, "Raj verma"];

var [id, city, bool] = info;

// console.log(id, city, bool);

var user = {
  name: "Kabir",
  gender: "male",
  city: "hyderabad",
};

var cityName = user.city;

var name = user.name;

console.log(cityName, name);

//Destructuring object

var { name, city } = user;

console.log(city, name);
