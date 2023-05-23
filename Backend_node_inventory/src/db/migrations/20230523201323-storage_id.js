'use strict';
const {ProductSchema, PRODUCT_TABLE} = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'storageId', ProductSchema.storageId);
    
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'storageId');
   
  }
};
