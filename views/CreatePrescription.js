
const adddisBtn = document.getElementById("adddis");
const inputContainer = document.getElementById("dishere");
let diseasecount = 1;

function addDisInputField() {
  const diseasefield = document.createElement("input");
  diseasefield.className = "Dis";
  diseasefield.setAttribute("type", "text");
  diseasefield.setAttribute("id", "disease" + diseasecount);
  diseasefield.setAttribute("placeholder", "Enter Disease");

  inputContainer.after(diseasefield);

  diseasecount++;
}

const addsymBtn = document.getElementById("addsym");
const SyminputContainer = document.getElementById("symhere");
let symptomcount = 1;

function addSymInputField() {
  const symptomfield = document.createElement("input");
  symptomfield.className = "Sym";
  symptomfield.setAttribute("type", "text");
  symptomfield.setAttribute("id", "symptom" + diseasecount);
  symptomfield.setAttribute("placeholder", "Enter Symptom");

  SyminputContainer.after(symptomfield);

  symptomcount++;
}

const addmedBtn = document.getElementById("addmed");
const MedinputContainer = document.getElementById("medhere");
let medicinecount = 1;

function addMedInputField() {

  const medicinetypefield = document.createElement("select");
  medicinetypefield.className = "medtype";
  medicinetypefield.setAttribute("name", "medicinetype");
  medicinetypefield.setAttribute("id", "medicinetype" + medicinecount);
  
  const opt1 = document.createElement("option");
  opt1.setAttribute("value", "Capsule");
  opt1.textContent = "Capsule";
  medicinetypefield.appendChild(opt1);
  const opt2 = document.createElement("option");
  opt2.setAttribute("value", "Drop");
  opt2.textContent = "Drop";
  medicinetypefield.appendChild(opt2);
  const opt3 = document.createElement("option");
  opt3.setAttribute("value", "Inhaler");
  opt3.textContent = "Inhaler";
  medicinetypefield.appendChild(opt3);
  const opt4 = document.createElement("option");
  opt4.setAttribute("value", "Injection");
  opt4.textContent = "Injection";
  medicinetypefield.appendChild(opt4);
  const opt5 = document.createElement("option");
  opt5.setAttribute("value", "Ointment");
  opt5.textContent = "Ointment";
  medicinetypefield.appendChild(opt5);
  const opt6 = document.createElement("option");
  opt6.setAttribute("value", "Suppository");
  opt6.textContent = "Suppository";
  medicinetypefield.appendChild(opt6);
  const opt7 = document.createElement("option");
  opt7.setAttribute("value", "Syrup");
  opt7.textContent = "Syrup";
  medicinetypefield.appendChild(opt7);
  const opt8 = document.createElement("option");
  opt8.setAttribute("value", "Tablet");
  opt8.textContent = "Tablet";
  medicinetypefield.appendChild(opt8);

  const medicinenamefield = document.createElement("input");
  medicinenamefield.className = "medname";
  medicinenamefield.setAttribute("type", "text");
  medicinenamefield.setAttribute("id", "medname" + medicinecount);
  medicinenamefield.setAttribute("placeholder", "Medicine Name");

  const medicinequantityfield = document.createElement("input");
  medicinequantityfield.className = "medquantity";
  medicinequantityfield.setAttribute("type", "number");
  medicinequantityfield.setAttribute("id", "medquantity" + medicinecount);
  medicinequantityfield.setAttribute("placeholder", "Quantity");

  const medicinetimefield = document.createElement("input");
  medicinetimefield.className = "medtimes";
  medicinetimefield.setAttribute("type", "text");
  medicinetimefield.setAttribute("id", "medtimes" + medicinecount);
  medicinetimefield.setAttribute("placeholder", "Time");

  const medicinedurationfield = document.createElement("input");
  medicinedurationfield.className = "medduration";
  medicinedurationfield.setAttribute("type", "text");
  medicinedurationfield.setAttribute("id", "medduration" + medicinecount);
  medicinedurationfield.setAttribute("placeholder", "Duration");

  const medicinecommentfield = document.createElement("input");
  medicinecommentfield.className = "medcomment";
  medicinecommentfield.setAttribute("type", "text");
  medicinecommentfield.setAttribute("id", "medcomment" + medicinecount);
  medicinecommentfield.setAttribute("placeholder", "Comment");

  MedinputContainer.appendChild(medicinetypefield);
  MedinputContainer.appendChild(medicinenamefield);
  MedinputContainer.appendChild(medicinequantityfield);
  MedinputContainer.appendChild(medicinetimefield);
  MedinputContainer.appendChild(medicinedurationfield);
  MedinputContainer.appendChild(medicinecommentfield);

  medicinetypefield.after(medicinenamefield);
  medicinenamefield.after(medicinequantityfield);
  medicinequantityfield.after(medicinetimefield);
  medicinetimefield.after(medicinedurationfield);
  medicinedurationfield.after(medicinecommentfield);

  medicinecount++;
}
