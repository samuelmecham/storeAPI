require('dotenv').config

const dns = require('node:dns');
    dns.setServers(['8.8.8.8']);
    const servers = dns.getServers();
    console.log('Node.js is using these DNS servers:', servers);




const connectDB = require('./db/connect')
const Product = require('./models/product')

const jaonProducts = require('./products.json')

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jaonProducts)
        console.log('success')
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()