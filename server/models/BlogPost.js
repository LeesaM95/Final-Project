const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const blogPostSchema = new Schema({
     title: {
        type: String,
        required: 'Title cannot be empty!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },

    text: {
        type: String,
        required: 'blog area cannot be empty!',
        trim: true,
    },

    author: {
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
            text: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 300,
            },
            author: {
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