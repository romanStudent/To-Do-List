// To connect with your mongoDB database
 const mongoose = require('mongoose');
 // const chalk = require('chalk');
// For backend and express
 const express = require('express');
 const cors = require("cors");
const http = require('http');


 const { connectionToDb, getDb } = require('./db');
  const Post = require('./models/User.js');


// connectionToDb();
 /*
const server =  http.createServer((req, res) => {
    console.log('Server request');
})

*/

// const errorMsg = chalk.bgKeyword('white').redBright;
// const successMsg = chalk.bgKeyword('green').white;


    let db = "mongodb+srv://jemand:123@cluster0.4tr0bum.mongodb.net/postsbox?retryWrites=true&w=majority";

    connectionToDb((err) => {
       if(!err) {
           app.listen(PORT, (err) => {
            console.log(`Server started on PORT ${PORT}`)
          });
       db = getDb();
      } else {
       console.log(`DB connection error: ${err}`); 
      }  
  });
      
    

  // let db = getDb();
  // console.log(getDb());
     // getDB();
     mongoose
          .connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
          .then((res) => console.log('Connected to DB'))
          .catch((error) => console.log(error));
let copy_post;


    const app = express();
     const PORT = 3012;


    app.use(cors());
 app.use(express.json());



/*
let db = 'mongodb+srv://jemand:123@cluster0.4tr0bum.mongodb.net/postsbox?retryWrites=true&w=majority';
 mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then((res) => console.log(res));
 */


  app.get('/api/:id', async (req, res) => {
//res.write('Hello');

    console.log('GET');
    console.log(req.body);

    // const {id, amount, posts} = req.body;
    // const post = new Post({id, amount, posts});

   // await post
   //    .save()
   //    .then((result) => res.send({ post: post }))
   //    .catch((error) => {
   //     console.log(error);
   //     console.log(post);
   //    })

/*
     res.json(
        // CopyPost(yup)
        {"id": 2}
        );
*/
// console.log(yup);
 //   const data = JSON.stringify(yup);



   //  res.setHeader('Content-Type', 'application/json');

// db = getDb();
// console.log(getDb());
console.log('db');
        let copy_url = String(req.url);
        // copy_url.substr(5, 1);
        let id = copy_url.substr(5);
        console.log('dfgh');

        db
   .collection("posts")
   .find()
   .toArray()
   .then((result) => {
        console.log(result[id]);

       res
         .status(200)
         .json(result[id]);
         })
   .catch(() => {
    res
      .status(500)
      // .json({ error: "Something goes wrong" })
   })
         
    // res.end(data);
      res.end();

    // res.end(JSON.stringify(req.body));
   //  const data = req.body;
   //  res.end(JSON.stringify(data))
 });


  app.post('/api/:id', async (req, res) => {
    const {id, amount_exercises, posts, date} = req.body;
    const post = new Post({id, amount_exercises, posts, date});

    await post
       .save()
       .then((result) => res.send({ post: post }))
       .catch((error) => {
        console.log(error);
        console.log(post);

    if (error.code === 11000 && error.keyValue.amount === null) {
        console.log('Amount must be unique and not null.' );
        console.log(error.keyValue);
    } else {
         console.log('Internal server error');
         console.log(error.keyValue);
    }
       })

     //  res.end(JSON.stringify(post));

/*
   db
    .collection('posts')
    .insertOne(post)
    .then((result) => {
        res
          .status(201)
          .json(result);
 })
 */   

    
  });

    app.delete('/api', async (req, res) => {
    const {id, amount_exercises, posts, date} = req.body;
    const post = new Post({id, amount_exercises, posts, date});

    await post
       .save()
       .then((result) => res.send({ post: post }))
       .catch((error) => {
        console.log(error);
        console.log(post);
       })


   db
    .collection('posts')
    .insertOne(req.body)
    .then((result) => {
        res
          .status(201)
          .json(result);
 })
    

    
  });




/*
mongoose.connect('mongodb+srv://jemand:123@cluster0.4tr0bum.mongodb.net/?retryWrites=true&w=majority/', {
    dbName: 'Cluster0',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to yourDB-name database'));
    */

/*
 connectionToDb((err) => {
    if(!err) {
      app.listen(PORT, (err) => {
         err ? console.log(err) : console.log(`Listening port ${PORT}`);
      });
      db = getDb();
    } else {
      console.log(`DB connection error: ${err}`);
    }
 });

 app.post('/post', (req, res) => {
    db
    .collection('posts')
    .insertOne(req.body)
    .then((result) => {
        res
          .status(201)
          .json(result);
    })
    .catch((err) => console.log(err));
 });

  app.get('/get', (req, res) => {
let movies = [];

    db
    .collection('posts')
    .find()
    .forEach((movie) => {movies.push(movie); console.log(movie)})
    .then((result) => {
        res
          .status(201)
          .json(result);
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
 });
*/


/*
mongoose.connect('mongodb+srv://jemand:123@cluster0.4tr0bum.mongodb.net/?retryWrites=true&w=majority/')
.then(() => {
    dbName='Cluster0'; useNewUrlParser=true; useUnifiedTopology=true;
    console.log('d')
}, err => err ? console.log(err) : 
    console.log('Connected to yourDB-name database'));
*/

 
/*
// Schema for users of app
const PostSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
        unique: true,
    },
    posts: {
        type: Object,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Post = mongoose.model('posts', PostSchema);
// Post.createIndexes();
 */

// console.log("App listen at port 5000");
// app.use(express.json());
// app.use(cors());
// app.get("/", (req, resp) => {
 
  //  resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
// });
 
 /*
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
*/



// export default copy_post;
 
