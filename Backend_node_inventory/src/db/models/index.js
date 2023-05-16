const { Product, ProductSchema } = require('./product.model');
const { Storage, StorageSchema, STORAGE_TABLE } = require('./storage.model');

function setupModels(sequelize){
    Product.init(ProductSchema, Product.config(sequelize));
    Storage.init(StorageSchema, Storage.config(sequelize));
    
    Storage.associate(sequelize.models)
}

module.exports =  setupModels ;