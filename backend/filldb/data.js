const carData = [
  {
    name: "BMW M4",
    model: "book@bmw.com",
    carType: "coupe",
    seats: "4",
    gears: "Automatic",
    price: "999.99",
    qt: "5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "BMW M2",
    model: "manager@bmw.com",
    carType: "coupe",
    seats: "4",
    gears: "Automatic",
    price: "699.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "Mercedes E250",
    model: "manager@mercedes.com",
    carType: "coupe",
    seats: "4",
    gears: "Automatic",
    price: "699.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "Audi A6",
    model: "manager@audi.com",
    carType: "coupe",
    seats: "4",
    gears: "Automatic",
    price: "899.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "Aston Martin",
    model: "manage@astonmartin.com",
    carType: "coupe",
    seats: "4",
    gears: "Automatic",
    price: "1399.99",
    qt: "10",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "Audi Q8",
    model: "manage@audi.com",
    carType: "suv",
    seats: "7",
    gears: "Automatic",
    price: "899.99",
    qt: "10",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "BMW X6",
    model: "manage@bmw.com",
    carType: "suv",
    seats: "7",
    gears: "Automatic",
    price: "1999.99",
    qt: "10",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "Pajero",
    model: "manage@mitshubishi.com",
    carType: "suv",
    seats: "7",
    gears: "Automatic",
    price: "299.99",
    qt: "10",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "MG Hector",
    model: "manage@hector.com",
    carType: "suv",
    seats: "7",
    gears: "Automatic",
    price: "199.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "MG Hector",
    model: "manage@hector.com",
    carType: "suv",
    seats: "7",
    gears: "Automatic",
    price: "199.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "BMW 540i",
    model: "book@bmw.com",
    carType: "sedan",
    seats: "4",
    gears: "Automatic",
    price: "999.99",
    qt: "5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "BMW 320d",
    model: "manager@bmw.com",
    carType: "sedan",
    seats: "4",
    gears: "Automatic",
    price: "699.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "Mercedes S500",
    model: "manager@mercedes.com",
    carType: "sedan",
    seats: "4",
    gears: "Automatic",
    price: "699.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
  {
    name: "Audi A7L",
    model: "manager@audi.com",
    carType: "sedan",
    seats: "4",
    gears: "Automatic",
    price: "899.99",
    qt: "7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
];

const userData = [
  {
    name: "Jainam Mehta",
    email: "mehta.jain@northeastern.edu",
    password: "Jainam1234",
  },
  {
    name: "Pranav Kapoor",
    email: "kapoor.p@northeastern.edu",
    password: "Pranav1234",
  },
  {
    name: "Paurush Batish",
    email: "batish.p@northeastern.edu",
    password: "Paurush1234",
  },
  {
    name: "Pranav Dhongade",
    email: "dhongade.p@northeastern.edu",
    password: "Pranav1234",
  },
];

module.exports = {
  userData,
  carData,
};
