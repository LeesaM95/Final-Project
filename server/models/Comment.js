const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    text: {
        type: String,
        required: 'comment cannot be empty!',
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
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;