'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // chạy dữ liệu bình thường
    // thêm dữ liệu bình thường
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'admin@gmail.com',
                password: 'admin123',
                firstName: 'lee',
                lastName: 'Tuan',
                address: 'VN',
                phoneNumber: '0817222222',
                gender: 1,
                image: 'avatar',
                roleId: 'admin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },
    // rollback thì sử dụng down
    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
