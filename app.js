const express = require('express')
const app = express()
const users = require('./routes/users')
const connectDB = require('./database/connect')
require('dotenv').config()


//middlewares

app.use(express.json()
)
//routes 
app.get('/hello', (req, res) => {
    res.send('User Logs App')
})

app.use('/api/v1/users', users)





const port = 3500
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
