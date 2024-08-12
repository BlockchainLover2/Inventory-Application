const express = require('express')
const path = require("node:path");
const app = express()
const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");
require('dotenv').config()


const PORT = process.env.PORT ? process.env.PORT :3000



app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/",indexRouter)
app.use("/category",categoryRouter)



app.listen(PORT, ()=>{
    console.log("Listening on",PORT)
})