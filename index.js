 const express = require('express');

const mongo = require("./mongoDB")
const PatientDatabsae = require("./patientSchema");
const DoctorDatabase = require("./doctorSchema");
const DoctorQualification = require("./qualificationSchema");
const prescriptionSchema=require("./prescriptionSchema");
const reportSchema=require("./reportSchema");
const doctorPrescripton = require("./prescriptionFromDoctorSchema");
const fs=require("fs");
const PDFDocument = require('pdfkit');

const multer =  require("multer");
 const path = require("path");
const imageSchema=require("./imageSchema");
const doctorImageSchema=require("./doctorImageSchema");



// const doc = new PDFDocument();
const app = express();
var logged_user_patient;
var logged_user_doctor;
var image_obj;




// // doc.pipe(fs.createWriteStream("prescription.pdf"));

app.use(express.urlencoded({extended: false}))

app.use(express.static(__dirname + "/views"));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb)=> {
        cb(null, file.fieldname + "-"+ Date.now())
    }
});

var upload = multer({storage:storage});


app.get("/", (req, res)=> {
    res.render("index");
})





app.post("/PatientSignUp.html", upload.single('image'), async(req, res, next)=> {
    const result = await PatientDatabsae.find({});
    
    try {
        
        const usersignup= {
            patient_id: result.length+10000,
            first_name: req.body.fname,
            last_name: req.body.lname,
            date_of_birth: req.body.dob,
            gender: req.body.gender,
            mobile_no: req.body.mobileno,
            email: req.body.email,
            password: req.body.password,
            division: req.body.division,
            district: req.body.district,
            thana: req.body.thana,
            blood_group: req.body.bloodgrp,
            height: req.body.height,
            weight: req.body.weight,
            allergy: req.body.allergy,
        }

        const obj = {
            email: req.body.email,
            image: {
                data: fs.readFileSync(path.join(__dirname, "/uploads/" + req.file.filename)),
                contentType: 'image/png'
            }
        }
        imageSchema.create(obj);
        await PatientDatabsae.insertMany([usersignup]);
       
        res.redirect("/PatientLogin.html");
    }
    catch(error) {
        console.log(error);
    }
})

app.post("/PatientLogin.html", async(req, res)=> {
    const email=req.body.email;
    const password=req.body.password;
    const result = await PatientDatabsae.findOne({email:email});
    const imageresult = await imageSchema.findOne({email:email});
    if(imageresult==null) {
        console.log("no image found")
    }
    else {
        console.log(imageresult.email);
    }
    if(result==null) {
        console.log("No account in this email");
        res.redirect("/PatientLogin.html");
    }
    else if(result.password==password) {
        image_obj=imageresult;
        logged_user_patient=result;
        console.log("correct password");
        res.redirect("/PatientHome");
    }
    else {
        console.log("incorrect password");
        res.redirect("/PatientLogin.html");
    }
})

app.get("/PatientHome", async(req, res)=> {
    const  prescriptionList = await prescriptionSchema.find({patient_id:logged_user_patient.patient_id});
    const reportList = await reportSchema.find({patient_id:logged_user_patient.patient_id});
    const prescriptionData = await doctorPrescripton.findOne({ patient_id: logged_user_patient.patient_id }).exec();
    logged_user_patient = await PatientDatabsae.findOne({email:logged_user_patient.email});


 let object_disease = [];
    const prescriptions = await doctorPrescripton.find({
        patient_id: logged_user_patient.patient_id
      });
  
      // Extract diseases from each prescription document and store them in a one-dimensional array
      object_disease = prescriptions.reduce((acc, curr) => {
        const diseases = Object.values(curr.diseases);
        acc.push(...diseases);
        return acc;
      }, []);

 
    res.render("PatientHome", {
        logged_user:logged_user_patient,
        imageobj:image_obj,
        prescriptions: prescriptionList,
        reports: reportList,
        prescriptionData:prescriptionData,
        object_disease: object_disease,
    });
});

app.post("/uploadPrescription", upload.single('pdf'), async(req, res, next)=> {
    const obj = {
        patient_id: logged_user_patient.patient_id,
        disease_name: req.body.presdiseaseName,
        doctor_name: req.body.presDoctorName,
        date: req.body.presdate,
        pdf: {
            data: fs.readFileSync(path.join(__dirname, "/uploads/" + req.file.filename)),
            contentType: 'application/pdf'
        }
    }
    prescriptionSchema.create(obj)
    .then(() => res.redirect("/PatientHome"))
    .catch(error => res.status(500).json({ error: 'An error occurred during upload.', details: error }));
})

app.post("/uploadReport", upload.single('pdf'), async(req, res, next)=> {
    const obj = {
        patient_id: logged_user_patient.patient_id,
        disease_name: req.body.reportName,
        date: req.body.reportDate,
        pdf: {
            data: fs.readFileSync(path.join(__dirname, "/uploads/" + req.file.filename)),
            contentType: 'application/pdf'
        }
    }
    reportSchema.create(obj)
    .then(() => res.redirect("/PatientHome"))
    .catch(error => res.status(500).json({ error: 'An error occurred during upload.', details: error }));
})




app.post("/DoctorSignUp.html", upload.single('image'), async(req, res, next)=> {
    try {
        const usersignup= {
            first_name: req.body.fname,
            last_name: req.body.lname,
            date_of_birth: req.body.dob,
            gender: req.body.gender,
            mobile_no: req.body.mobileno,
            email: req.body.email,
            password: req.body.password,
            division: req.body.division,
            district: req.body.district,
            thana: req.body.thana,
            bmdc_no: req.body.bmdc,
            speciality: req.body.speciality,
            medical_name: req.body.medicalname,
            patient_treated: 0
        }

        const obj = {
            email: req.body.email,
            image: {
                data: fs.readFileSync(path.join(__dirname, "/uploads/" + req.file.filename)),
                contentType: 'image/png'
            }
        }
        doctorImageSchema.create(obj);

        await DoctorDatabase.insertMany([usersignup]);
        console.log(usersignup);
        res.redirect("/DoctorLogin.html");
    }
    catch(error) {
        console.log(error);
    }
})

app.post("/DoctorLogin.html", async(req, res)=> {
    const email=req.body.email;
    const password=req.body.password;
    const result = await DoctorDatabase.findOne({email:email});
    if(result.password==password) {
        logged_user_doctor=result;
        console.log("correct password");
        res.redirect("/DoctorHome");
    }
    else {
        console.log("incorrect password");
        res.redirect("/DoctorLogin.html");
    }
})

app.get("/DoctorHome", async(req, res)=> {
    const search_result = await PatientDatabsae.find({});
    const qualification = await DoctorQualification.find({bmdc_no:logged_user_doctor.bmdc_no});
    const imageresult = await doctorImageSchema.findOne({email:logged_user_doctor.email});
    
    res.render("DoctorHome", {
        logged_user:logged_user_doctor,
        searchResult:search_result,
        // qualifications: qualification,
        qualificationData:qualification,
        imageobj:imageresult
    });
})

app.post("/editBasicDoctor", async(req, res)=> {
    const emailToUpdate = logged_user_doctor.email;
    const updated_fields = {};

// Check for the existence of each field in req.body before adding it to the updated_fields object
    if (req.body.editpass) {
    updated_fields.password = req.body.editpass;
    }
    if (req.body.editmobile) {
    updated_fields.mobile_no = req.body.editmobile;
    }
    if (req.body.editdivision) {
    updated_fields.division = req.body.editdivision;
    }
    if (req.body.editthana) {
    updated_fields.thana = req.body.editthana;
    }
    if (req.body.editdistrict) {
    updated_fields.district = req.body.editdistrict;
    }
    
    updateRecord(emailToUpdate, updated_fields);

    console.log(updated_fields);
    const search_result = await PatientDatabsae.find({});
    res.render("DoctorHome", {
        logged_user:logged_user_doctor,
        searchResult:search_result
    });
})


app.post("/editBasicPatient", async(req, res)=> {
    const search_result = await PatientDatabsae.findOne({patient_id:logged_user_patient.patient_id});
    const emailToUpdate = logged_user_patient.email;
    const updated_fields = {};

// Check for the existence of each field in req.body before adding it to the updated_fields object
    if (req.body.editpass) {
    updated_fields.password = req.body.editpass;
    }
    if (req.body.editheight) {
    updated_fields.editheight = req.body.editheight;
    }
    if (req.body.editweight) {
    updated_fields.division = req.body.editweight;
    }
    if(req.body.editallergy) {
        updated_fields.allergy = req.body.editallergy + ", "+ search_result.allergy;
    }
    

    updateRecordP(emailToUpdate, updated_fields);

    console.log(updated_fields);
    res.redirect("/PatientHome");
})




const updateRecord = async (email, updatedFields) => {
    try {
      const result = await DoctorDatabase.updateOne(
        { email: email }, // Filter the record by email
        {
          $set: updatedFields, // Use the provided updated_fields object to update the fields
        }
      );
      console.log("Update result:", result);
    } catch (error) {
      console.error("Error updating record:", error);
    }
};

const updateRecordP = async (email, updatedFields) => {
    try {
      const result = await PatientDatabsae.updateOne(
        { email: email }, // Filter the record by email
        {
          $set: updatedFields, // Use the provided updated_fields object to update the fields
        }
      );
      console.log("Update result:", result);
    } catch (error) {
      console.error("Error updating record:", error);
    }
};



app.post("/addQualification", async(req, res)=> {
    try {
        const qualification= {
            bmdc_no: logged_user_doctor.bmdc_no,
            name_of_Degree: req.body.editdegree,
            passing_year: req.body.edityear,
            medical_name: req.body.editmedical
        }

        await DoctorQualification.insertMany([qualification]);
        console.log(qualification);
        const search_result = await PatientDatabsae.find({});
        // res.render("DoctorHome", {
        //     logged_user:logged_user_doctor,
        //     searchResult:search_result
        // });
        res.redirect("/DoctorHome");
    }
    catch(error) {
        console.log(error);
    }
})




var searched_patient;
app.post("/searchPatients", async(req, res)=> {
    const pat_id=req.body.patient_s;
    searched_patient = await PatientDatabsae.findOne({patient_id:pat_id});
    console.log(searched_patient);
    res.redirect("/PatientOverview")
})


app.get("/PatientOverview", async (req, res) => {
    let object_disease = [];
    try {
      const prescriptions = await doctorPrescripton.find({
        patient_id: searched_patient.patient_id
      });
  
      // Extract diseases from each prescription document and store them in a one-dimensional array
      object_disease = prescriptions.reduce((acc, curr) => {
        const diseases = Object.values(curr.diseases);
        acc.push(...diseases);
        return acc;
      }, []);
  
      // Now object_disease will contain the array as you requested
      console.log('object_disease:', object_disease);
  
      // Continue with rendering the EJS template inside the try block
      var object_diseases = ["a", "b", "c", "d", "e"];
      var object_dates = [
        "03/06/2023", "03/06/2023", "03/06/2023", "03/06/2023", "03/06/2023","03/06/2023", "03/06/2023",
         "03/06/2023", "03/06/2023", "03/06/2023","03/06/2023", "03/06/2023", "03/06/2023", "03/06/2023"];
  
      res.render("PatientOverview", {
        logged_user: logged_user_doctor,
        searchResult: searched_patient,
        object_disease: object_disease,
        object_dates: object_dates,
        imageobj: await imageSchema.findOne({ email: searched_patient.email })
      });
    } catch (error) {
      console.error('Error retrieving diseases:', error);
      // Handle the error here, e.g., render an error page or redirect to an error page.
      // res.render('error', { error });
    }
  });
  

app.post("/CreatePrescription", async(req, res)=> {
    res.redirect("/CreatePrescription");
})



app.get("/CreatePrescription", async(req, res)=> {
    let object_disease=[];
    let object_dates=[];
    res.render("CreatePrescription",{
        logged_user:logged_user_doctor,
        searchResult:searched_patient,
        object_disease:object_disease,
        object_dates: object_dates
    });
})



app.post("/insertPrescription", async(req, res) => {
    // Access the form data using the names of the input fields
    try{
        const disease = {};
        if (req.body.disease1) {
        disease.disease1 = req.body.disease1;
        }
        if (req.body.disease2) {
        disease.disease2 = req.body.disease2;
        }
        if (req.body.disease3) {
            disease.disease3 = req.body.disease3;
            }
        // ... and so on for other diseases

        // Access the symptoms data as an object
        const symptoms = {};
        if (req.body.symptom1) {
        symptoms.symptom1 = req.body.symptom1;
        }
        if (req.body.symptom2) {
        symptoms.symptom2 = req.body.symptom2;
        }
        if (req.body.symptom3) {
        symptoms.symptom3 = req.body.symptom3;
        }
    
        // Access the medicine details
        const medicineDetails = [];
    
        if (
        req.body.medicine1 &&
        req.body.medname1 &&
        req.body.medquantity1 &&
        req.body.medtimes1 &&
        req.body.medduration1
        ) {
        medicineDetails.push({
            type: req.body.medicine1,
            name: req.body.medname1,
            quantity: req.body.medquantity1,
            times: req.body.medtimes1,
            duration: req.body.medduration1,
            comment: req.body.medcomment1,
        });
        }
    
        if (
        req.body.medicine2 &&
        req.body.medname2 &&
        req.body.medquantity2 &&
        req.body.medtimes2 &&
        req.body.medduration2
        ) {
        medicineDetails.push({
            type: req.body.medicine2,
            name: req.body.medname2,
            quantity: req.body.medquantity2,
            times: req.body.medtimes2,
            duration: req.body.medduration2,
            comment: req.body.medcomment2,
        });
        }
    
        if (
        req.body.medicine3 &&
        req.body.medname3 &&
        req.body.medquantity3 &&
        req.body.medtimes3 &&
        req.body.medduration3
        ) {
        medicineDetails.push({
            type: req.body.medicine3,
            name: req.body.medname3,
            quantity: req.body.medquantity3,
            times: req.body.medtimes3,
            duration: req.body.medduration3,
            comment: req.body.medcomment3,
        });
        }
    
        if (
        req.body.medicine4 &&
        req.body.medname4 &&
        req.body.medquantity4 &&
        req.body.medtimes4 &&
        req.body.medduration4
        ) {
        medicineDetails.push({
            type: req.body.medicine4,
            name: req.body.medname4,
            quantity: req.body.medquantity4,
            times: req.body.medtimes4,
            duration: req.body.medduration4,
            comment: req.body.medcomment4,
        });
        }
    
        if (
        req.body.medicine5 &&
        req.body.medname5 &&
        req.body.medquantity5 &&
        req.body.medtimes5 &&
        req.body.medduration5
        ) {
        medicineDetails.push({
            type: req.body.medicine5,
            name: req.body.medname5,
            quantity: req.body.medquantity5,
            times: req.body.medtimes5,
            duration: req.body.medduration5,
            comment: req.body.medcomment5,
        });
        }
    
        // Access the advice and next visit date
        const advice = req.body.advice;
        const nextVisitDate = req.body.nextdate;

        const prescription = new doctorPrescripton({
            patient_id: searched_patient.patient_id,
            bmdc_no: logged_user_doctor.bmdc_no,
            diseases: disease,
            symptoms: symptoms,
            medicines: medicineDetails,
            advice: advice,
            nextVisitDate: nextVisitDate,
          });
      
          // Save the prescription data to the database
          const savedPrescription = await prescription.save();
      
          console.log(savedPrescription)



          const doc = new PDFDocument();

          // Set response headers for PDF download
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', 'attachment; filename="prescription.pdf"');
      
          // Pipe the PDF document to the response
          //doc.pipe(res);
      
          // Add content to the PDF
          doc.fontSize(18).text('Prescription', { align: 'center' }).moveDown(1);
          doc.fontSize(14).text('Diseases:', { underline: true });
          doc.text(JSON.stringify(disease, null, 2)).moveDown(1);
      
          doc.fontSize(14).text('Symptoms:', { underline: true });
          doc.text(JSON.stringify(symptoms, null, 2)).moveDown(1);
      
          doc.fontSize(14).text('Medicines:', { underline: true });
          medicineDetails.forEach((medicine, index) => {
            doc.text(`Medicine ${index + 1}:`);
            doc.text(`Type: ${medicine.type}`);
            doc.text(`Name: ${medicine.name}`);
            doc.text(`Quantity: ${medicine.quantity}`);
            doc.text(`Times: ${medicine.times}`);
            doc.text(`Duration: ${medicine.duration}`);
            doc.text(`Comment: ${medicine.comment || '-'}`);
            doc.moveDown(1);
          });
      
          doc.fontSize(14).text('Advice:', { underline: true });
          doc.text(advice || '-').moveDown(1);
      
          doc.fontSize(14).text('Date of Next Visit:', { underline: true });
          doc.text(nextVisitDate || '-').moveDown(1);
      
          // Finalize the PDF and end the response
          doc.end();
      
          // Convert the PDF data to a buffer
          const buffers = [];
          doc.on('data', (buffer) => buffers.push(buffer));
          doc.on('end', async () => {
            const pdfData = Buffer.concat(buffers);
      
            // Save the prescription data along with the PDF buffer to the database
            const newPrescription = new prescriptionSchema({
              patient_id: searched_patient.patient_id, // Replace with the actual patient ID
              disease_name: req.body.disease1, // Replace with the actual disease name
              doctor_name: logged_user_doctor.first_name, // Replace with the actual doctor's name
              date: new Date(), // Replace with the actual date
              pdf: {
                data: pdfData,
                contentType: 'application/pdf',
              },
            });
      
            const savedPrescription = await newPrescription.save();
            console.log('Prescription saved successfully:', savedPrescription);


           

            console.log("Before update: ", logged_user_doctor);
            DoctorDatabase.findOneAndUpdate(
            { bmdc_no: logged_user_doctor.bmdc_no },
            { $inc: { patient_treated: 1 } }
            )
            .then((updatedDoctor) => {
                console.log("Updated doctor: ", updatedDoctor);
            })
            .catch((error) => {
                console.error("Error updating patient count:", error);
            });


            logged_user_doctor = await DoctorDatabase.findOne({bmdc_no:logged_user_doctor.bmdc_no});
            console.log("After update: ", logged_user_doctor);


            res.redirect("/DoctorHome");
          });
        } catch (error) {
          console.log(error);
          res.status(500).send('Error while generating the PDF and saving prescription data.');
        }
      });
  





let doctor_searchRresult = [];
app.post("/searchDoctor", async(req,res)=> {
    const speciality=req.body.speciality;
    const medical=req.body.medical;
    const district=req.body.district;
    console.log(speciality + medical + district);

    const query = {};

    if (speciality) {
    query.speciality = speciality;
    }

    if (medical) {
    query.medical_name = medical;
    }

    if (district) {
    query.district = district;
    }

    // Executing the query
    doctor_searchRresult = await DoctorDatabase.find(query);
    if(doctor_searchRresult.length==0) {
        console.log("No doctor found");
        res.redirect("/PatientHome");
    }
    else {
        console.log("doctor found");
        res.redirect("/SearchDoctorResult");
    }
    
})

app.get("/SearchDoctorResult", async(req, res)=> {
    
    res.render("SearchDoctorResult", {
        resultObject:doctor_searchRresult
    })
})
app.listen(1400, ()=> {
    console.log("connected port");
})
