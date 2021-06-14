const mongoose = require("mongoose");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/deep-thoughts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
