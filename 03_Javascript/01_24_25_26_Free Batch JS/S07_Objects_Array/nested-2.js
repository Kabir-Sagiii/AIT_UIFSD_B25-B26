var user = {
  id: 1,
  name: "Siddharath",
  gender: "male",
  address: {
    city: {
      cityName: "pune",
      pincode: 12,
    },
    state: "MH",
  },
};

console.log(user.address.city.cityName);
