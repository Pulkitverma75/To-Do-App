const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const uri = "mongodb://0.0.0.0:27017/";

// Database connection
mongoose.connect(uri);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs')

//Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// Server connection
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});

