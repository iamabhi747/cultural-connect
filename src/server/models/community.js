const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
    name: String,
    description: String,
    keywords: Array
});

module.exports = mongoose.model('Community', CommunitySchema);