const mongoose = require("mongoose");

// first check if our db is connected
require("../db/index");

// require the model

let UserModel = require("../models/User.model.js");

// insert into the model
// inserting many documents
UserModel.insertMany([
  {
    firstName: "Leanne",
    lastName: "Graham",
    location: "Amsterdam",
    email: "Sincere@april.biz",
    password: "53919-4257",
    posting: [],
  },
  {
    firstName: "Ervin",
    lastName: "Howell",
    location: "Amsterdam",
    email: "Shanna@melissa.tv",
    password: "53919-4257",
    posting: [],
  },
  {
    firstName: "Clementine",
    lastName: "Bauch",
    location: "Amsterdam",
    email: "Nathan@yesenia.net",
    password: "53919-4257",
    posting: [],
  },
  {
    firstName: "Patricia",
    lastName: "Lebsack",
    location: "Amsterdam",
    email: "Julianne.OConner@kory.org",
    password: "53919-4257",
    posting: [],
  },
  {
    firstName: "Chelsey",
    lastName: "Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    password: "53919-4257",
    posting: [],
  },
])
  .then(() => {
    console.log("Data seeded");
    // always close the connection after seeding
    // please make sure you require mongoose at the top of the file
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log("Data seeding went wrong!", error);
  });

let PostingModel = require("../models/Posting.model.js");

// insert into the model
// inserting many documents
PostingModel.insertMany([
  {
    title: "needed animal colourist",
    description: "dyes animals for movies and marketing campaigns",
    location: "Amsterdam",
    date: new Date().toString(),
    address: "Kulas Light Apt. 556 92998-3874",
    phoneNumber: "1-770-736-8031 x56442",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "available beverage dissemination officer",
    description: "bartender",
    location: "Berlin",
    date: new Date().toString(),
    address: "Skiles Walks Suite 351 33263",
    phoneNumber: "010-692-6593 x09125",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "needed canine relocation specialist",
    description: "dog catcher",
    location: "Madrid",
    date: new Date().toString(),
    address: "Rex Trail Suite 280 58804-1099",
    phoneNumber: "1-463-123-4447",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "available chief amazement office",
    description: "founder",
    location: "Paris",
    date: new Date().toString(),
    address: "Norberto Crossing Apt. 950 23505-1337",
    phoneNumber: "493-170-9623 x156",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "needed chief curator",
    description:
      "chooses what items should be featured on the website front page",
    location: "Amsterdam",
    date: new Date().toString(),
    address: "Ellsworth Summit Suite 729 45169",
    phoneNumber: "(254)954-1289",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "available chief troublemaker",
    description: "chief executive officer",
    location: "Berlin",
    date: new Date().toString(),
    address: "Victor Plains Suite 879 90566-7771",
    phoneNumber: "1-477-935-8478 x6430",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "needed culture champion",
    description: "ensures sustenance of values and a positive environment",
    location: "Madrid",
    date: new Date().toString(),
    address: "Douglas Extension Suite 847 59590-4157",
    phoneNumber: "586.493.6943 x140",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "available digital dynamo",
    description: "digital marketing executive",
    location: "Paris",
    date: new Date().toString(),
    address: "Dayna Park Suite 449 76495-3109",
    phoneNumber: "(775)976-6794 x41206",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "needed director of ethical hacking",
    description:
      "helps financial institutions identify the vulnerabilities of their web applications",
    location: "Amsterdam",
    date: new Date().toString(),
    address: "Hoeger Mall Apt. 692 53919-4257",
    phoneNumber: "024-648-3804",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "available dreams fulfiller",
    description: "financial services consultant",
    location: "Berlin",
    date: new Date().toString(),
    address: "Kattie Turnpike Suite 198 31428-2261",
    phoneNumber: "024-648-3804",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
]);
