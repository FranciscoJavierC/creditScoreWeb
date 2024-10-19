// Code  for mongoose config in backend
// Filename - backend/index.js
const mongoose = require('mongoose');


// To connect with your mongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://francisco080304:XT66mWM0xSGsvBs4@creditscorewebapp.ynw7x.mongodb.net/?retryWrites=true&w=majority&appName=CreditScoreWebApp', {
      dbName: 'creditscorewebapp',
    });
    console.log('Connected to creditscorewebapp database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the process with failure
  }
};

// Call the function to connect to MongoDB
connectDB();

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
app.set('view engine', 'ejs');
console.log("App listen at port 3000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
});

app.get("/login", async (req, resp) => {
    resp.render('login')
})

app.get("/signup", async (req, resp) => {
    resp.render('signup')
});

app.get("/home", async (req, resp) => {
  resp.render("home")
})
app.listen(3000);
