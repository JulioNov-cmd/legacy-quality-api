const mongoose = require('mongoose');

const inspectionSchema = new mongoose.Schema({

    product: {
        type: String,
        required: true
    },

    temperature: {
        type: Number,
        required: true
    },

    quality: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Inspection', inspectionSchema);
