const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const genetateJwt = (id, email, role) => {
  return jwt.sign(
    {id, email, role}, 
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или пароль'))
    }

    const candidate = await User.findOne({where: {email}})
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
    await Basket.create({userId: user.id})
    // const basket = await Basket.create({userId: user.id}) // basket пока не используется

    const token = genetateJwt(user.id, user.email, user.role)
    return res.json({token})
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('Пользователь с таким email не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль'))
    }
    const token = genetateJwt(user.id, user.email, user.role)
    return res.json({token})
  }

  async check(req, res) {
    // const { id } = req.query
    //
    // if (!id) {
    //   return next(ApiError.badRequest('Не передан id'))
    // }
    // res.json({id})
    const token = genetateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }

  async logout(req, res, next) {

  }
}

module.exports = new UserController()