const query = require('../db/queries')


let value = false

function setValue(req,res){
    value = !value
    res.redirect("/")
}


async function getAllCategories(req,res) {
    const limit = req.query.limit === undefined ? "":req.query.limit
    const categories = await query.getAllCategories(limit)
    res.render('index',{categories:categories,testValue:value})
}

async function createCategoryGet(req,res){
    res.render("categoryForm")
}

async function createCategoryPost(req,res){
    const category = req.body
    await query.addNewCategory(category)
    res.redirect("/category")
}
async function deleteCategoryPost(req,res){
    const category = req.params.name
    await query.deleteCategory(category)
    res.redirect("/category")
}

module.exports = {
    getAllCategories,
    createCategoryPost,
    createCategoryGet,
    deleteCategoryPost,
    setValue
}