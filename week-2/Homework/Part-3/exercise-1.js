/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
let name1 = kinningParkHouse.currentOwner.firstName;
let name2 = kinningParkHouse.currentOwner.lastName;

function getOwnerFullName(house) {
  for (value in house) {
    return name1 + " " + name2;

  }
};

getOwnerFullName(name1, name2);

// returns an array of the owners' email addresses of the two houses
let emailAdress1 = kinningParkHouse.currentOwner.email;
let emailAdress2 = parkAvenueHouse.currentOwner.email;

function getEmailAddresses(house1, house2){
  for (values in house1, house2) {
    return house1.email + house2.email;
  }

};

getEmailAddresses(emailAdress1, emailAdress2);



// returns the address for the cheapest house out of the two
let priceHouse1 = kinningParkHouse.price;
let priceHouse2 = kinningParkHouse.price;

function getCheapestAddress(house1, house2) {
  if (house1.price < house2.price) {
    return house1.address;
  } else {
    return house2.address;
  }
};

getCheapestAddress(priceHouse1, priceHouse2);

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);