require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const upload = multer({ dest: "src/uploads/" });
const authRoutes = require("./src/auth/authRoutes.js");
const userRoutes = require("./src/users/userRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");
