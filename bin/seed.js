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
