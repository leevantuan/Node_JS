import userController from '../controllers/userController';

const express = require('express');

let router = express.Router();

let initAPIRouter = (app) => {
    router.get('/login', userController.APIAllUsers);

    return app.use('/api/users', router);
};

module.exports = initAPIRouter;
