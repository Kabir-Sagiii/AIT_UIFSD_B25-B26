var user = {
  id: 1,
  name: "Siddharath",
  gender: "male",
  address: {
    city: "mumbai",
    state: "MH",
  },
};

console.log(user);

user.address.city = "Pune";
user.address.pincode = 12;
console.log("---------------------------");

console.log(user);
