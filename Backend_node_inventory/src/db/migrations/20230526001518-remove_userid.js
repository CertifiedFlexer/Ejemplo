'use strict';
const {StorageSchema, STORAGE_TABLE} = require('../models/storage.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn(STORAGE_TABLE, 'user_id', StorageSchema.user_id);
    await queryInterface.removeColumn(STORAGE_TABLE, 'capacity', StorageSchema.capacity);
    
  },

  async down (queryInterface) {
    await queryInterface.addColumn(STORAGE_TABLE, 'userId', StorageSchema.userId);
    await queryInterface.addColumn(STORAGE_TABLE, 'capacity', StorageSchema.capacity);
   
  }
};
