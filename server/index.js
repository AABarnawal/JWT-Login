const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/authRoutes");
const signup = require("./controller/Signup");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());

app.use(express.json());


try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected");
} catch (error) {
    console.log(error);
}


app.use("/api", routes);


app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`);
})