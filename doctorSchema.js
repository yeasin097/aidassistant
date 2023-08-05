const mongodb=require("mongoose");


const AidAssistant = new mongodb.Schema({
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

    bmdc_no: {
        type: String,
        required: true
    },

    speciality: {
        type: String,
        required: true
    },

    medical_name: {
        type: String,
        required: true
    },
    patient_treated: {
        type: Number,
        required: true
    }

});

const collection = new mongodb.model("DoctorDatabase", AidAssistant);

module.exports=collection;