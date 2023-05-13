// import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRouter from './route/web';
import initAPIRouter from './route/api';
import connectDB from './config/connectDB';
import cors from 'cors';

const bodyParser = require('body-parser');
const express = require('express');

require('dotenv').config();

let app = express();
app.use(cors({ origin: true }));
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));

// const jsonParser = bodyParser.json();
// // create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);
initAPIRouter(app);

connectDB();

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('back end node js is running on the port http://localhost:' + port);
});
