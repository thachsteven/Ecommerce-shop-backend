const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors")
const jwt = require('express-jwt');

const app = express();

app.use(cors())
app.options('*', cors())

const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

require("dotenv/config");
const api = process.env.API_URL;
const secret = process.env.SECRET

//Middle ware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routes
app.use(`${api}/categories`, authJwt(secret) , categoriesRoutes);
app.use(`${api}/products`,authJwt(secret), productsRoutes);
app.use(`${api}/users`, authJwt(secret), usersRoutes);
app.use(`${api}/orders`, authJwt(secret), ordersRoutes);

app.use(errorHandler)

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log(api);
  console.log("Sever is running http://localhost:3000");
});
