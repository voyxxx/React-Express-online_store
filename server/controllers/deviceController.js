const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo, Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const { log } = require('console')

class DeviceController {
  async create(req, res, next) {
    try { 
      const { name, price, brandId, typeId, info } = req.body
      const deviceFromBase = await Device.findOne({where: {name}})
      if (deviceFromBase) {
        return next(ApiError.conflict('Такое устройство уже существует'))
      }
      const { img } = req.files
      const fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const device = await Device.create({ name, price, brandId, typeId, img: fileName })

      if (info) {
        const info = JSON.parse(info)
        info.forEach(i =>
            DeviceInfo.create({
              title: i.title,
              description: i.description,
              deviceId: device.id
            })
        )
      }

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res, next) {
    try {
      let {brandId, typeId, limit, page} = req.query
      page = page || 1
      limit = limit || 9
      const offset = page * limit - limit

      let devices
      if (!brandId && !typeId) {
        devices = await Device.findAndCountAll({ limit, offset })
      }
      if (brandId && !typeId) {
        devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
      }
      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
      }
      if (brandId && typeId) {
        devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
      }
      return res.json(devices)
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const device = await Device.findOne(
        { 
          where: { id },
          include: [{ model: DeviceInfo, as: 'info' }],
        }
      );

      if (!device) {
        return next(ApiError.notFound('Device not found'));
      }
      return res.json(device);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }
}

module.exports = new DeviceController()