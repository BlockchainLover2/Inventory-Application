const express = require('express')
const categoryRouter = express.Router()
const categoryController = require('../controllers/CategoryController.js')
const itemController = require('../controllers/ItemController.js')


categoryRouter.get("/",categoryController.getAllCategories)




categoryRouter.get("/create",categoryController.createCategoryGet)
categoryRouter.post("/create",categoryController.createCategoryPost)

categoryRouter.get("/:name",itemController.getItemsByCategory)

categoryRouter.get("/:name/create",itemController.createItemGet)

categoryRouter.post("/:name/create",itemController.createItemPost)

categoryRouter.post("/:name/:itemId/delete",itemController.deleteItemPost)


categoryRouter.post("/:name/delete",categoryController.deleteCategoryPost)




module.exports = categoryRouter

