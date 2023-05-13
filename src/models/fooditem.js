'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class foodItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    foodItem.init(
        {
            //điền dữ liệu cần up lên

            name: DataTypes.STRING,
            image: DataTypes.STRING,
            description: DataTypes.STRING,
            category: DataTypes.STRING,
            price: DataTypes.STRING,
            quantity: DataTypes.INTEGER,

            //sử song song file migration
        },
        {
            sequelize,
            modelName: 'foodItem',
        },
    );
    return foodItem;
};
