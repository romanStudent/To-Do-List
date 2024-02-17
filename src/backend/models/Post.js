const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    index: {
        type: Number,
        required: true,
        unique: true,
    },
    amount_exercises: {
        type: Number,
        unique: false,
    },
    posts: {
        type: Object,
    },
    
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    
});
const Post = mongoose.model('posts', PostSchema);

module.exports = Post;
