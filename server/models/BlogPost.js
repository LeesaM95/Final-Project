const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const blogPostSchema = new Schema({
    blogTitle: { // @TODO: Change to just use 'title', 'blog' is redundant
        type: String,
        required: 'Title cannot be empty!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    blogText: { // @TODO: Change to just use 'text', 'blog' is redundant
        type: String,
        required: 'blog area cannot be empty!',
        trim: true,
    },
    blogAuthor: { // @TODO: Change to just use 'author', 'blog' is redundant
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: { // @TODO: Change to just 'text' 'comment' is redundant
                type: String,
                required: true,
                minlength: 1,
                maxlength: 300,
            },
            commentAuthor: { // @TODO: Change to just 'text' 'comment' is redundant
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
              },
        },
    ],
});

const BlogPost = model('BlogPost', blogPostSchema);
module.exports = BlogPost;