const mongoose = require("mongoose");

const reportScehma = new mongoose.Schema({
    patient_id: {
        type: Number,
        required: true
    },
    disease_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    pdf: {
        data: Buffer,
        contentType: String
    }
});

const collection = new mongoose.model("Reports", reportScehma);

module.exports=collection;