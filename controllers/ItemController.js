const query = require('../db/queries')


async function getItemsByCategory(req,res){
    const param = req.params.name
    const items = await query.getItemsByCategory(param)
    res.render("category",{items:items,category:param})
}
async function createItemGet(req,res){
    const param = req.params.name
    res.render("itemForm",{category:param})
}


async function createItemPost(req,res){
    const item = req.body
    const param = req.params.name
    item.category = param
    await query.addNewItem(item)
    res.redirect("/category/"+param)
}

async function deleteItemPost(req,res){
    const param = req.params
    await query.deleteItem(param)
    res.redirect(`/category/${param.name}`)
}




module.exports = {
    getItemsByCategory,
    createItemGet,
    createItemPost,
    deleteItemPost
}