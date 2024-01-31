const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    id: {
        type: Number,
        required: false,
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
    },
    
});
const Post = mongoose.model('posts', PostSchema);
module.exports = Post;
