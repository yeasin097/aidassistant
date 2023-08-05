const mongodb=require("mongoose");


const AidAssistant = new mongodb.Schema({
    first_name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },
    date_of_donation: {
        type: String
    }


});

const collection = new mongodb.model("blooddonation", AidAssistant);

module.exports=collection;