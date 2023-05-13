const express = require('express');

let configViewEngine = (app) => {
    // arrow function
    app.use(express.static('./src/public'));
    app.set('view engine', 'ejs');
    //tất cả các file views của nó nằm trong file src/views tự động tìm tới file src views
    //gọi lại không cần / ở đầu
    app.set('views', './src/views');
};

module.exports = configViewEngine;
