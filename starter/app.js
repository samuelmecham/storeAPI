require('dotenv').config


//thing that mite help code?
const dns = require('node:dns');
    dns.setServers(['8.8.8.8']);
    const servers = dns.getServers();
    console.log('Node.js is using these DNS servers:', servers);




require('express-async-errors')

const express = require('express')
const app  = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')


const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())


//rootes
app.get('/',(req,res)=> {
    res.send('<h1>Store API</h1> <a href = "/api/v1/products"> products route</a>')
})

app.use('/api/v1/products',productsRouter )

// products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000


const start = async () =>{
    try {
        //conect db
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
//left at 5:00:00