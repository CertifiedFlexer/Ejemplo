const { models } = require('../libs/sequelize');

class StorageService {
    constructor() {
        this.model=models.Storage;
    }

    async getAll() {
        return await this.model.findAll({
            include: [ {model: models.Product, as: 'product'}]
        });
    }

    async getById(id) {
        return await this.model.findByPk(id,{
            include: [ {model: models.Product, as: 'product'}]
            
        });
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        const storage = await this.getById(id);
        return await storage.update(data);
    }

    async delete(id) {
        const storage = await this.getById(id);
        return await storage.destroy();
    }


   
}

module.exports = StorageService;