const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimelineSchema = new Schema({
    title: String,
    description: String,
    catagery: String,
    keywords: Array
});

module.exports = mongoose.model('Timeline', TimelineSchema);