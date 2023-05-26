'use strict';
const {ProductSchema, PRODUCT_TABLE} = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'storage_id', ProductSchema.storage_id);
    await queryInterface.addColumn(PRODUCT_TABLE, 'storage_id', ProductSchema.storage_id);
    
  },

  async down (queryInterface) {

    await queryInterface.addColumn(PRODUCT_TABLE, 'storage_id', ProductSchema.storage_id);
    await queryInterface.removeColumn(PRODUCT_TABLE, 'storage_id', ProductSchema.storage_id);
    
   
  }
};
