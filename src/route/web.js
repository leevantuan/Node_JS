import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

const express = require('express');

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello word');
    });
    router.get('/API', homeController.getHomePage);
    router.get('/crud', homeController.getCrud);
    // router.post('/post-crud', homeController.postCrud);
    router.post('/post-crud', homeController.postCrud);
    //read
    router.get('/get-crud', homeController.displayCrud);
    //edit
    router.get('/edit-crud', homeController.getEditCrud);

    router.post('/put-crud', homeController.putCrud);

    router.get('/delete-crud', homeController.deleteCrud);

    router.post('/api/login', userController.handleLogin);

    return app.use('/', router);
};

module.exports = initWebRouter;
