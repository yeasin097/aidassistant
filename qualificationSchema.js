const mongodb=require("mongoose");


const AidAssistant = new mongodb.Schema({
    bmdc_no: {
        type: Number,
        required: true
    },

    name_of_Degree: {
        type: String,
        required: true
    },

    passing_year: {
        type: String,
        required: true
    },
    medical_name: {
        type: String,
        required: true
    }

    

});

const collection = new mongodb.model("QualificationDatabase", AidAssistant);

module.exports=collection;