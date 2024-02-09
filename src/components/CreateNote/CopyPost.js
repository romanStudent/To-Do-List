const {useState, useRef} = require('react');


const axios = require('axios');





// import { RF } from '../../backend/index.js';
// import Post from '../../server';

// console.log(Post);

 // const { MongoClient } = require('mongodb');
 // const mongoose = require('mongoose');
 // const express = require('express');
 // const cors = require('cors');


// let yup = JSON.stringify({"k": 2});

 function CopyPost(post, yup, setYup) {


function c() {
    console.log(post);
    setYup(Object.entries({}, post));
    // yup = JSON.stringify({"k": 2});
}

c();
     console.log(yup);
  return post;
}







module.exports = {CopyPost};
