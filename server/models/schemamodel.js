const mongoose = require('mongoose');

const schema = mongoose.Schema;

const newSchema = new schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        trim: false,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('firstTD',newSchema)