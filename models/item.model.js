const mongoose = require('mongoose')
const { Schema } = mongoose;

const itemSchema = new Schema({
    Id: {
        type: String
    },
    Name: {
        type: String
    },
    Category: {
        type: String
    },
    Link1: {
        type: String
    },
    Link2: {
        type: String
    },
    Link3: {
        type: String
    },
    Description: {
        type: String
    },
    Color: {
        type: String
    },
    ItemSize: {
        type: String
    },
    Price: {
        type: String
    }
});

module.exports = mongoose.model('Item',itemSchema)