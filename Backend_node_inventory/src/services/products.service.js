const { models } = require('../libs/sequelize');


class ProductService {
    constructor() {

        

    }

    async getAll() {
        const response=await models.Product.findAll();
        return response;
    }

    async getById(id) {
        const product=await models.Product.findByPK({id});
        if (!product){
            console.log("Product couldn't be found")
        }
            return product;
    }

    async create(data) {
        const newProduct =await model.Product.create(data);
        return newProduct;
    }

    async update(id, changes) {
        const product = await this.findOne(id);
        const response= await product.update(changes);
        return response;
    }

    async delete(id) {
        const product = await this.getById(id);
        await product.destroy();
        return {id};
    }
}

module.exports = ProductService;