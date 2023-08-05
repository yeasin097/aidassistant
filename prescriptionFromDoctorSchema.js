const mongoose = require('mongoose');

// Define the schema for the medicine details
const MedicineSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  times: { type: String, required: true },
  duration: { type: String, required: true },
  comment: { type: String },
});

// Define the main prescription schema
const PrescriptionSchema = new mongoose.Schema({
    patient_id: {
        type: String,
        required: true
    },
    bmdc_no: {
        type: Number,
        required: true
    },
  diseases: {
    disease1: { type: String },
    disease2: { type: String },
    // ... and so on for other diseases
  },
  symptoms: {
    symptom1: { type: String },
    symptom2: { type: String },
    symptom3: { type: String },
    // ... and so on for other symptoms
  },
  medicines: [MedicineSchema], // An array of medicine details objects
  advice: { type: String },
  nextVisitDate: { type: Date },
});

// Create the Prescription model based on the schema
const Prescription = mongoose.model('PrescriptionFromDoctor', PrescriptionSchema);

module.exports = Prescription;
