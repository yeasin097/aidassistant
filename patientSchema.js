const mongodb=require("mongoose");


const AidAssistant = new mongodb.Schema({
    patient_id: {
        type: Number,
        required: true,
        unique: true
    },

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    date_of_birth: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    mobile_no: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    division: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    thana: {
        type: String,
        required: true
    },

    blood_group: {
        type: String,
        required: true
    },

    height: {
        type: String,
        required: true
    },

    weight: {
        type: String,
        required: true
    },

    allergy: {
        type: String,
        required: true
    }

});

const collection = new mongodb.model("PatientDatabase", AidAssistant);

module.exports=collection;