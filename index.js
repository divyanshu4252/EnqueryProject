import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const app = express()
app.use(cors())
const port = process.env.PORT || 3000
const DATABASE_URL = process.env.DB_URL 

//Database Connect:-
connectDB(DATABASE_URL)

//Set Template engine:-
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Load router:-
app.use('/',web)

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})
