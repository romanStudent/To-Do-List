const { MongoClient } = require('mongodb');


let URL = "mongodb+srv://jemand:123@cluster0.4tr0bum.mongodb.net/postsbox?retryWrites=true&w=majority";

let dbConnection;
module.exports = {
	connectionToDb: (cb) => {
       MongoClient
          .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
          .then((client) => {
          	console.log('Connected to MongoDB');
          	dbConnection = client.db();
          	return cb();
          })
          .catch((err) => {
          	return cb(err);
          })
	},
	getDb: () => {return dbConnection},
}
