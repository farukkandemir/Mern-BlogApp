require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

/////////-------RouteImports------////////////

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const loginRoute = require("./routes/loginRoute");

///////////-------MiddleWares-------////////////
const verifyJwt = require("./middlewares/verifyJwt");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/images", express.static(path.join(__dirname, "/images")));

//////////------Routes----------//////////
app.use("/api/login", loginRoute);
app.use("/api/users", userRoutes);
app.use(verifyJwt);
app.use("/api/blogs", blogRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(PORT, console.log(`Server is running at port ${PORT}`));
