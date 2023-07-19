const mongoose = require("mongoose");

const url =
  "mongodb+srv://NikhilPanda:Adnapfamily-18@db.n4rmajy.mongodb.net/stackoverflow";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
