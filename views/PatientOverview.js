    let tr5=document.getElementById("tr5");
    let td6=document.createElement("td"); td6.className="td6";
    let td7=document.createElement("td"); td7.className="td7";

    tr5.appendChild(td6);
    tr5.appendChild(td7);
    td6.after(td7);

    td6.setAttribute("id", "patientdisease"); 
    td6.innerHTML="Disease History"
    let diseaselist=document.createElement("ul");
    diseaselist.setAttribute("type", "none");
    diseaselist.className="diseaselist";
    td6.appendChild(diseaselist);
    const patient_disease = ["Jaundice", "Heart Stroke", "Diabetes", "Corona","Cholestrol","Myopia"];
    for (let j = 0; j < patient_disease.length; j++) {
    let disease_name=document.createElement("li");
    diseaselist.appendChild(disease_name);
    disease_name.className="pdisease";
    disease_name.innerHTML=patient_disease[j];
    }

    td7.setAttribute("id", "patientallergy"); 
    td7.innerHTML="Allergies"
    let allergylist=document.createElement("ul");
    allergylist.setAttribute("type", "none");
    allergylist.className="allergylist";
    td7.appendChild(allergylist);
    const patient_allergy = ["Chicken", "mushrooms", "flowers", "dust"];
    for (let j = 0; j < patient_allergy.length; j++) {
        let allergy_name=document.createElement("li");
        allergylist.appendChild(allergy_name);
        allergy_name.className="pallergy";
        allergy_name.innerHTML=patient_allergy[j];
    }