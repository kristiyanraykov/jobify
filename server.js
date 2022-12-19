import express from 'express'
const app = express()

import cors from 'cors'

const corsOptions = {
    origin: 'http://localhost:5006'
}

app.use(cors(corsOptions))

import  dotenv from 'dotenv'
dotenv.config()

import {dirname} from 'path'
import {fileURLToPath} from 'url'
import path from 'path'

import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import cookieParser from 'cookie-parser'


import 'express-async-errors'

//db and authenticate user
import connectDB from './db/connect.js'

//routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

//middleware
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, './client/build')))

app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5005


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()