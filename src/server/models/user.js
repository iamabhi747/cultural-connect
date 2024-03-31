const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    phone: String,
    interactions:
    {
        likes: Array,
        saves: Array,
        reports: Array
    },
    subscriptions: [
        {
            subid: Number,
            catagery: String,
            type: String
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);