import userServices from '../services/userServices';
import db from '../models/index';

let handleLogin = async (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    let password = req.body.password;
    let userData = await userServices.handleUserLogin(phoneNumber, password);

    if (!phoneNumber || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter',
        });
    }

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {},
    });
};

let APIAllUsers = async (req, res) => {
    let data = await userServices.APIAllUser();
    return res.status(200).json({
        data

    });
};

module.exports = {
    handleLogin: handleLogin,
    APIAllUsers: APIAllUsers,
};
