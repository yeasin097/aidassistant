const mongoose = require("mongoose");

const prescriptionScehma = new mongoose.Schema({
    patient_id: {
        type: Number,
        required: true
    },
    disease_name: {
        type: String,
        required: true
    },
    doctor_name: {
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

const collection = new mongoose.model("Prescriptions", prescriptionScehma);

module.exports=collection;