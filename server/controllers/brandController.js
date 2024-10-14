const { Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
  async create(req, res, next) {
    const { name } = req.body
    const brandFromBase = await Brand.findOne({where: {name}})
    if (brandFromBase) {
      return next(ApiError.conflict('Такой бренд уже существует'))
    }
    const brand = await Brand.create({name})
    return res.json(brand)
  }

  async getAll(req, res, next) {
    const brands = await Brand.findAll()
    return res.json(brands)
  }
}

module.exports = new BrandController()