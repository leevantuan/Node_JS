import db from '../models/index';
import bcrypt, { hash } from 'bcrypt';

let handleUserLogin = (phoneNumber, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkPhoneNumber(phoneNumber);
            if (isExist) {
                let user = await db.User.findOne({
                    where: { phoneNumber: phoneNumber },
                    raw: true,
                    attributes: ['phoneNumber', 'roleId', 'password', 'firstName'],
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'Success';

                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Error password.';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not a found. `;
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = `Your's phone number isn't exist.`;
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};

let checkPhoneNumber = (userPhoneNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { phoneNumber: userPhoneNumber },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let APIAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    APIAllUser: APIAllUser,
};
