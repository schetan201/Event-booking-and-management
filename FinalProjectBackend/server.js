import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const passport = require('passport');
const app = express();
const router = express.Router();
process.env[0] =  {
        "JWT_SECRET": "SECRET#123",
        "JWT_EXP": "10m"
    }
;
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/FinalProject',{ useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('successfull db connection');
});

app.use('/', router);

let initApp = require('./api/app');
initApp(app);

app.listen(4000, () => console.log('running on 4000'));