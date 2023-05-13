'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    order.init(
        {
            //điền dữ liệu cần up lên

            userId: DataTypes.INTEGER,
            foodId: DataTypes.INTEGER,
            date: DataTypes.DATE,
            address: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            totalPrice: DataTypes.STRING,

            //sử song song file migration
        },
        {
            sequelize,
            modelName: 'order',
        },
    );
    return order;
};
