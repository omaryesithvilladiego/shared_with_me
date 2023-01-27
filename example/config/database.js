 const mongoose = require('mongoose');
 require("dotenv").config();

 exports.mongoConnect = () => {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongodb Atlas"))
  .catch((error) => console.log(error) )
 }

 mongoose.connection.on("open", _ => {
     console.log("database is connected")

 })



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://omyesith:1067961979Omar@cluster0.kxypk7g.mongodb.net/?retryWrites=true&w=majority";


// exports.mongoConnect = () => {
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//     client.connect(err => {
//         const collection = client.db("test").collection("devices");
//         // perform actions on the collection object
//         console.log("Connected to mongodbAtlas")
//         client.close();
//       });
      
// } 


