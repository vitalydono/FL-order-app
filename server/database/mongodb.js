//Import the mongoose module
// const mongoose = require('mongoose');
// const MONGO_URI = require('../config.env')
// require('dotenv').config();
//
// const connectDB = async () => {
//   try {
//     const con = await mongoose.connect(process.config.MONGO_URI , {
//       useNewUrlParser:true,
//       useUnifiedTopology:true,
//       useFindAndModify:false,
//       useCreateIndex:true
//     })
//     console.log(`MongoDB connected:${con.connection.host}`)
//   }catch (err){
//     console.log(err)
//     process.exit(1)
//   }
// }
//
// module.exports = connectDB

//
// const db_pass = process.config.env.MONGODB_PASSWORD;
//
// //Set up default mongoose connection
// var mongoDB = `mongodb+srv://flowerOrderApp:${db_pass}@cluster0.whkiz.mongodb.net/flowerOrdersDB?retryWrites=true&w=majority`;
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
//
// //Get the default connection
// var db = mongoose.connection;
//
//
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
// exports.models = db

//Import the mongoose module
const mongoose = require('mongoose');

require('dotenv').config();

// const db_pass = process.env.MONGODB_PASSWORD;
const MONGODB_PASSWORD = "admin123"

//Set up default mongoose connection
const mongoDB = `mongodb+srv://admin:${MONGODB_PASSWORD}@cluster0.lbyak.mongodb.net/orders?retryWrites=true&w=majority
`

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log('MongoDB is Connected')
  }).catch((err) => console.log(err))


// //Get the default connection
// const db = mongoose.connection;
//
//
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
// exports.models = db
