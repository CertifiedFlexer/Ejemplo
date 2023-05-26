'use strict';
const {ProductSchema, PRODUCT_TABLE} = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'storageId', ProductSchema.storageId);
    await queryInterface.addColumn(PRODUCT_TABLE, 'storage_id', ProductSchema.storage_id);
    
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'storageId');
    await queryInterface.addColumn(PRODUCT_TABLE, 'storage_id', ProductSchema.storage_id);
    
   
  }
};

