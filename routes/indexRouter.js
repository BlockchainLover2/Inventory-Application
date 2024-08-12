const express = require('express')
const indexRouter = express.Router()
const categoryController = require('../controllers/CategoryController.js')
const itemController = require('../controllers/ItemController.js')


indexRouter.get("/",categoryController.getAllCategories)



module.exports = indexRouter

