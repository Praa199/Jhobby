const mongoose = require("mongoose");

// first check if our db is connected
require("../db/index");

// require the model

// let PostingModel = require("../models/User.model.js");

// // insert into the model
// // inserting many documents
// PostingModel.insertMany([
//   {
//     firstName: "Leanne",
//     lastName: "Graham",
//     location: "Amsterdam",
//     email: "Sincere@april.biz",
//     password: "53919-4257",
//     posting: [],
//   },
//   {
//     firstName: "Ervin",
//     lastName: "Howell",
//     location: "Amsterdam",
//     email: "Shanna@melissa.tv",
//     password: "53919-4257",
//     posting: [],
//   },
//   {
//     firstName: "Clementine",
//     lastName: "Bauch",
//     location: "Amsterdam",
//     email: "Nathan@yesenia.net",
//     password: "53919-4257",
//     posting: [],
//   },
//   {
//     firstName: "Patricia",
//     lastName: "Lebsack",
//     location: "Amsterdam",
//     email: "Julianne.OConner@kory.org",
//     password: "53919-4257",
//     posting: [],
//   },
//   {
//     firstName: "Chelsey",
//     lastName: "Dietrich",
//     email: "Lucio_Hettinger@annie.ca",
//     password: "53919-4257",
//     posting: [],
//   },
// ])
//   .then(() => {
//     console.log("Data seeded");
//     // always close the connection after seeding
//     // please make sure you require mongoose at the top of the file
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log("Data seeding went wrong!", error);
//   });

let PostingModel = require("../models/Posting.model.js");

// insert into the model
// inserting many documents
PostingModel.insertMany([
  {
    title: "animal colourist",
    description: "dyes animals for movies and marketing campaigns",
    location: "Amsterdam",
    date: new Date().toString(),
    adress: {
      street: "Kulas Light",
      suite: "Apt. 556",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phoneNumber: "1-770-736-8031 x56442",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "beverage dissemination officer",
    description: "bartender",
    location: "Berlin",
    date: new Date().toString(),
    adress: {
      street: "Skiles Walks",
      suite: "Suite 351",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phoneNumber: "010-692-6593 x09125",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "canine relocation specialist",
    description: "dog catcher",
    location: "Madrid",
    date: new Date().toString(),
    adress: {
      street: "Rex Trail",
      suite: "Suite 280",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phoneNumber: "1-463-123-4447",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "chief amazement office",
    description: "founder",
    location: "Paris",
    date: new Date().toString(),
    adress: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phoneNumber: "493-170-9623 x156",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "chief curator",
    description:
      "chooses what items should be featured on the website front page",
    location: "Amsterdam",
    date: new Date().toString(),
    adress: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phoneNumber: "(254)954-1289",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "chief troublemaker",
    description: "chief executive officer",
    location: "Berlin",
    date: new Date().toString(),
    adress: {
      street: "Victor Plains",
      suite: "Suite 879",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phoneNumber: "1-477-935-8478 x6430",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "culture champion",
    description: "ensures sustenance of values and a positive environment",
    location: "Madrid",
    date: new Date().toString(),
    adress: {
      street: "Douglas Extension",
      suite: "Suite 847",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phoneNumber: "586.493.6943 x140",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "digital dynamo",
    description: "digital marketing executive",
    location: "Paris",
    date: new Date().toString(),
    adress: {
      street: "Dayna Park",
      suite: "Suite 449",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phoneNumber: "(775)976-6794 x41206",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "director of ethical hacking",
    description:
      "helps financial institutions identify the vulnerabilities of their web applications",
    location: "Amsterdam",
    date: new Date().toString(),
    adress: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phoneNumber: "024-648-3804",
    insurance: "false",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
  {
    title: "dreams fulfiller",
    description: "financial services consultant",
    location: "Berlin",
    date: new Date().toString(),
    adress: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phoneNumber: "024-648-3804",
    insurance: "true",
    hourlyFee: "15.00",
    image: "http://placeimg.com/640/480/any",
  },
]);
