const {Model, DataTypes, Sequelize, UniqueConstraintError} = require('sequelize');
const {PRODUCT_TABLE}=require('./product.model')
const STORAGE_TABLE = 'storage';

const StorageSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    address:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    capacity:{
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    userId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'user_id',
        unique: true,
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
         },
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL',
    },
};

class Storage extends Model{
    static associate(models){
        this.belongsTo(models.Product, {as: "product", foreignKey: 'userId'})
    } 

    static config(sequelize){
        return {
            sequelize,
            tableName: STORAGE_TABLE,
            modelName: 'Storage',
            timestamps: false,
        }
    }
}

module.exports = {StorageSchema, Storage,STORAGE_TABLE};