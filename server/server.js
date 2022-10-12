require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes");

///////////-------MiddleWares-------////////////

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//////////------Routes----------//////////

app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(PORT, console.log(`Server is running at port ${PORT}`));
