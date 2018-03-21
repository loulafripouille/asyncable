'use strict'

exports.middleware = fn => (req, res, next) => fn(req, res, next).catch(next)
exports.paramMiddleware = fn => (req, res, next, param) => fn(req, res, next, param).catch(next)
