'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AllCode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    AllCode.init(
        {
            //điền dữ liệu cần up lên

            key: DataTypes.STRING,
            type: DataTypes.STRING,
            valueEn: DataTypes.STRING,
            valueVi: DataTypes.STRING,

            //sử song song file migration
        },
        {
            sequelize,
            modelName: 'AllCode',
        },
    );
    return AllCode;
};
