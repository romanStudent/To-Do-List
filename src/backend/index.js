const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const http = require('http');
const { connectionToDb, getDb } = require('./db');
const Post = require('./models/Post.js');

    
  const app = express();
  const PORT = 3012;
  app.use(cors());
  app.use(express.json());


const days = {};

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
      

     mongoose
          .connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
          .then((res) => console.log('Connected to DB'))
          .catch((error) => console.log(error));



let copy_post;


app.get('/api', async (req, res) => {
    res.end(JSON.stringify(req.body));
});

  app.get('/api/:id', async (req, res) => {

        let copy_url = String(req.url);
        let id = copy_url.substr(5);

        db
   .collection("posts")
   .find()
   .toArray()
   .then((result) => {
        for(let i = 0; i < result.length; i++) {
            days[i] = result[i];
        }

        res
         .status(200)
         .json(days);
        })

   .catch(() => {
    res
      .status(500)
   })

      res.end(JSON.stringify(days));
 });


app.post(`/api`, async (req, res) => {
  const { index, amount_exercises, posts, date } = req.body;
  const day = new Post({ index, amount_exercises, posts, date });

  try {
    const result = await day.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    
    if (error.code === 11000 && error.keyValue.amount === null) {
      console.log('Amount must be unique and not null.');
      console.log(error.keyValue);
      res.status(400).send('Amount must be unique and not null.');
    } else {
      console.log('Internal server error');
      console.log(error.keyValue);
      res.status(500).send('Internal server error');
    }
  }
});

    app.put('/api/:id', async (req, res) => {




  try {
          const { index, amount_exercises, posts, date } = req.body;
     
          const day = await Post.findOneAndUpdate({index: req.params.id}, req.body);
            
            if (!day) {
               console.log('Day not found');
               return res.status(404).send('Day not found');
            }

            res.send(day);
  } catch (error) {
    console.error(error.message);
    
    if (error.code === 11000 && error.keyValue.amount === null) {
      console.log('Amount must be unique and not null.');
      console.log(error.keyValue);
      res.status(400).send('Amount must be unique and not null.');
    } else {
      console.log('Internal server error');
      console.log(error.keyValue);
      res.status(500).send('Internal server error server');
    }
  }

    
  });
