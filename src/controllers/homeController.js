import db from '../models/index';
import CRUDservices from '../services/CRUDservices';

let getHomePage = async (req, res) => {
    //kết nối với DB
    // kieemr tra lỗi
    try {
        let data = await db.User.findAll();

        // console.log(data);

        return res.render('homePage.ejs', {
            data: JSON.stringify(data),
        });
    } catch (e) {
        console.log(e);
    }
};

let getCrud = (req, res) => {
    return res.render('crud.ejs');
};
let postCrud = async (req, res) => {
    let message = await CRUDservices.createNewUsers(req.body);
    // console.log(message);
    //láy các tham số từ cline gửi lên req
    // console.log(req.body);
    return res.send('post crud');
};

let displayCrud = async (req, res) => {
    let data = await CRUDservices.getAllUser();
    // console.log(data);
    return res.render('displayCrud.ejs', {
        dataTable: data,
    });
};

let getEditCrud = async (req, res) => {
    //lay id user
    let userId = req.query.id;

    if (userId) {
        let userData = await CRUDservices.getInfoUserId(userId);
        // console.log(userData);
        return res.render('editCrud.ejs', {
            user: userData,
        });
    } else {
        return res.send('Users not found!');
    }
};

let putCrud = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservices.updateUserData(data);
    return res.render('displayCrud.ejs', {
        dataTable: allUsers,
    });
};

let deleteCrud = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let allUsers = await CRUDservices.deleteUserById(id);
        return res.send('DELETE DONE!');
        // return res.render('displayCrud.ejs', {
        //     dataTable: allUsers,
        // });
    } else {
        return res.send('no found!');
    }
};

module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
    displayCrud: displayCrud,
    getEditCrud: getEditCrud,
    putCrud: putCrud,
    deleteCrud: deleteCrud,
};
