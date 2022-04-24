const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const recipeRoute = require('./routes/recipe');
require('dotenv/config');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/recipe', recipeRoute );

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to Db");
})

app.get('/' ,(req, res) => {
    res.send("You are on home");
})

app.listen(PORT, () => console.log(`Running on port: http://localhost:${PORT}`));