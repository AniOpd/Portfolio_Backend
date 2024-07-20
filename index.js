import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './db/index.js'
import UserRoutes from './routes/User.routes.js'
import cookieParser from 'cookie-parser'
import updatProfileRouter from './routes/updateProfile.routes.js'
import {authenticate} from './Authentication/admin.auth.js';
import showRoutes from './routes/show.routes.js';
import createRoutes from './routes/create.routes.js';

const port = process.env.PORT || 5000;
const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use(cookieParser())
app.use('/show',showRoutes)
app.use('/user',UserRoutes)
app.use('/update',authenticate,updatProfileRouter)
app.use('/create',authenticate,createRoutes)

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})