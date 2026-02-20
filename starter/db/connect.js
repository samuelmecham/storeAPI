const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect("mongodb+srv://sammecham2008_db_user:KSlsp1108@nodeexpressprojects.fyfozgq.mongodb.net/STORE-API?appName=NodeExpressProjects", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
