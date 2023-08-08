const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

const collection = new mongoose.model("DoctorImage", imageSchema);

module.exports=collection;
