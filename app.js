const express = require('express')
const app = express()
const users = require('./routes/users')
const connectDB = require('./database/connect')
require('dotenv').config()


//middlewares

app.use(express.json()
)

app.use('/api/v1/users', users)





const port = 3600
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`))
    }
    catch (error) {
        console.log(error)
    }
}

start()
