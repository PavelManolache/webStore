const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
require('dotenv').config();

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

//DB connection
mongoose.connect(process.env.MONGO_URI)
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);

    });

fs.readdirSync("controllers").forEach(function (file) {
    if (file.slice(-3) == ".js") {
        const route = require("./controllers/" + file)
        route.controller(app)
    }
})

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized' });
});

app.use('/', router);
app.listen(process.env.PORT, function () {
    console.log('app running')
})