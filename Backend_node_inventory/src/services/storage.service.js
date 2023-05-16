const { models } = require('../libs/sequelize');

class StorageService {
    constructor() {

        

    }

    async getAll() {
        const response=await models.Storage.findAll();
        return response;
    }

    async getById(id) {
        const storage=await models.Storage.findByPK({id});
        if (!Storage){
            console.log("Storage couldn't be found")
        }
            return Storage;
    }

    async create(data) {
        const newStorage =await model.Storage.create(data);
        return newStorage;
    }

    async update(id, changes) {
        const Storage = await this.findOne(id);
        const response= await Storage.update(changes);
        return response;
    }

    async delete(id) {
        const Storage = await this.getById(id);
        await Storage.destroy();
        return {id};
    }
}

module.exports = StorageService;