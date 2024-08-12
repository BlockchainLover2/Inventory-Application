const pool = require('./pool.js')



async function getAllCategories(limit) {
    const {rows} = await pool.query("SELECT * FROM category where category.title like '%" + limit + "%'")
    return rows
}


async function getItemsByCategory(category) {
    const {rows} = await pool.query("SELECT item.title,item.id FROM item join category on item.categoryid = category.id where category.title = '"+category+"'")

    return rows
}


async function addNewCategory(category){
    await pool.query('INSERT INTO category (title) values ($1)',[category.title])
}

async function addNewItem(item){
    let query = await pool.query('select id from category where title = $1',[item.category])
    if(query.rows.length === 0){
        await addNewCategory({title:item.category})
        query = await pool.query('select id from category where title = $1',[item.category])
    }
    const categoryId = query.rows[0].id
    await pool.query('INSERT INTO item (title,categoryId) values ($1,$2)',[item.title,categoryId])


}
async function deleteItem(item){
    await pool.query('delete from item where item.id = $1',[item.itemId])
}
async function deleteCategory(categoryTitle){
    let query = await pool.query('select id from category where title = $1',[categoryTitle])

    if(query.rows.length !== 0){
        const categoryId = query.rows[0].id
        await pool.query('delete from item where categoryId = $1',[categoryId])
        await pool.query('delete from category where id = $1',[categoryId])

    }

}

module.exports = {
    getAllCategories,
    getItemsByCategory,
    addNewCategory,
    addNewItem,
    deleteItem,
    deleteCategory
}