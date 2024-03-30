const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userid: Number,
    title: String,
    body: String,
    media: Array,
    time: Date,
    interactions: {
        views: Number,
        likes: Number,
        shares: Number,
        saves: Number,
        reports: Array
    },
    keywords: Array,
    linkages: {
        timelines: Array,
        communities: Array
    }
});

module.exports = mongoose.model('Post', PostSchema);