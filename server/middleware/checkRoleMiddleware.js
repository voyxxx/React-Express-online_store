const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      return next()
    }
    try {
      const token = req.headers.authorization.split(' ')[1] // Bearer token
      if (!token) {
        return next(ApiError.unauthorized())
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY)
      if (decoded.role !== role) {
        return next(ApiError.forbidden('Нет доступа'))
      }
      req.user = decoded
      next()
    } catch (e) {
        // res.status(401).json({message: 'Нет авторизации'})
        return next(ApiError.unauthorized())
    }
  }
}


