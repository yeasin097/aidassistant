let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

let item=document.getElementsByClassName("item");


let patientprofile=document.querySelector(".patient_profile");
let prescriptionlist=document.querySelector(".patient_prescription_list");
let reportlist=document.querySelector(".patient_report_list");
let medicinelist=document.querySelector(".patient_medicine_list");
let editprofile=document.querySelector(".patient_edit_profile");
let searchdoctor=document.querySelector(".patient_search_doctor");

item[0].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="flex";
    prescriptionlist.style.display="none";
    reportlist.style.display="none";
    medicinelist.style.display="none";
    editprofile.style.display="none";
    searchdoctor.style.display="none";
}
item[1].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="block";
    reportlist.style.display="none";
    medicinelist.style.display="none";
    editprofile.style.display="none";
    searchdoctor.style.display="none";
}
item[2].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
    reportlist.style.display="block";
    medicinelist.style.display="none";
    editprofile.style.display="none";
    searchdoctor.style.display="none";
}
item[3].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
    reportlist.style.display="none";
    medicinelist.style.display="block";
    editprofile.style.display="none";
    searchdoctor.style.display="none";
}
item[4].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
    reportlist.style.display="none";
    medicinelist.style.display="none";
    editprofile.style.display="block";
    searchdoctor.style.display="none";
}
item[5].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
    reportlist.style.display="none";
    medicinelist.style.display="none";
    editprofile.style.display="none";
    searchdoctor.style.display="block";
}

function removeactive(){
    for(b of item){
        b.classList.remove("active");
    }
}

document.getElementById("current").click();

//allergy list
const patient_allergy = ["Chicken", "mushrooms", "flowers", "dust"];
let allergy=document.getElementById("allergy");
for (let j = 0; j < patient_allergy.length; j++) {
    let allergy_name=document.createElement("p");
    allergy.appendChild(allergy_name);
    allergy_name.innerHTML=patient_allergy[j];
}


//disease list
const patient_disease = ["Jaundice", "Heart Stroke", "Diabetes", "Corona"];
let disease=document.getElementById("disease");
for (let i = 0; i < patient_disease.length; i++) {
    let disease_name=document.createElement("p");
    disease.appendChild(disease_name);
    disease_name.className="pdisease";
    disease_name.innerHTML=patient_disease[i];
}


//prescriptionlist
const prescription_disease = ["Jaundice", "Heart Stroke", "Diabetes", "Corona"];
const prescription_doctor = ["Dr. Yeasin", "Dr. Arafat", "Dr. Faisal", "Dr. Kuddus"];
const prescription_date = ["05/02/2023", "07/08/2021", "06/07/2021", "05/05/2000"];
let pres_list=document.getElementById("pres_list");
for(let i = 0; i < prescription_doctor.length; i++){
    let pres_bar=document.createElement("div"); pres_bar.className=("presbar");
    let grid_container=document.createElement("div"); grid_container.className="grid-container";
    let grid_item1=document.createElement("div"); grid_item1.className="grid-item item1";
    let grid_item2=document.createElement("div"); grid_item2.className="grid-item item2";
    let grid_item3=document.createElement("div"); grid_item3.className="grid-item item3";
    let grid_item4=document.createElement("div"); grid_item4.className="grid-item item4";
    let grid_item5=document.createElement("div"); grid_item5.className="grid-item item5";
    

    pres_list.appendChild(pres_bar);
    pres_bar.appendChild(grid_container);
    grid_container.appendChild(grid_item1);
    grid_container.appendChild(grid_item2);
    grid_container.appendChild(grid_item3);
    grid_container.appendChild(grid_item4);
    grid_container.appendChild(grid_item5);
    grid_item1.after(grid_item2);
    grid_item2.after(grid_item3);
    grid_item3.after(grid_item4);
    grid_item4.after(grid_item5);

    var profimg=document.createElement("img"); profimg.setAttribute("id", "pres_img");
    grid_item1.appendChild(profimg);
    profimg.src="images/presicon.png";

    let pres_dis=document.createElement("span"); pres_dis.setAttribute("id", "presdis"); 
    grid_item2.appendChild(pres_dis);
    pres_dis.innerHTML="Prescription on ";
    pres_dis.innerHTML+=prescription_disease[i];

    let pres_download=document.createElement("button"); pres_download.setAttribute("id", "download"); 
    grid_item3.appendChild(pres_download);
    let pres_downloadimg=document.createElement("i"); pres_downloadimg.className="bx bxs-download"; 
    pres_download.appendChild(pres_downloadimg); 

    let pres_doc=document.createElement("span"); pres_doc.setAttribute("id", "presdoc"); 
    grid_item4.appendChild(pres_doc);
    pres_doc.innerHTML="By ";
    pres_doc.innerHTML+=prescription_doctor[i]; 

    let pres_date=document.createElement("span"); pres_date.setAttribute("id", "presdate"); 
    grid_item5.appendChild(pres_date);
    pres_date.innerHTML="Date : ";
    pres_date.innerHTML+=prescription_date[i]; 

}

//report list

const report_test = ["CBC", "X-RAY", "Dengue", "Urine"];

const report_date= ["05/02/2023", "07/08/2021", "06/07/2021", "05/05/2000"];
let report_list=document.getElementById("rep_list");
for(let i = 0; i < report_test.length; i++){
    let rep_bar=document.createElement("div"); rep_bar.className=("repbar");
    let grid_container=document.createElement("div"); grid_container.className="grid-container";
    let grid_item1=document.createElement("div"); grid_item1.className="grid-item item1";
    let grid_item2=document.createElement("div"); grid_item2.className="grid-item item2";
    let grid_item3=document.createElement("div"); grid_item3.className="grid-item item3";
    let grid_item4=document.createElement("div"); grid_item4.className="grid-item item4";
    let grid_item5=document.createElement("div"); grid_item5.className="grid-item item5";
    

    report_list.appendChild(rep_bar);
    rep_bar.appendChild(grid_container);
    grid_container.appendChild(grid_item1);
    grid_container.appendChild(grid_item2);
    grid_container.appendChild(grid_item3);
    grid_container.appendChild(grid_item4);
    grid_container.appendChild(grid_item5);
    grid_item1.after(grid_item2);
    grid_item2.after(grid_item3);
    grid_item3.after(grid_item4);
    grid_item4.after(grid_item5);

    var repimg=document.createElement("img"); repimg.setAttribute("id", "rep_img");
    grid_item1.appendChild(repimg);
    repimg.src="images/reporticon.jpg";

    let rep_test=document.createElement("span"); rep_test.setAttribute("id", "reptest"); 
    grid_item2.appendChild(rep_test);
    rep_test.innerHTML="Report on ";
    rep_test.innerHTML+=report_test[i];

    let rep_download=document.createElement("button"); rep_download.setAttribute("id", "download"); 
    grid_item3.appendChild(rep_download);
    let rep_downloadimg=document.createElement("i"); rep_downloadimg.className="bx bxs-download"; 
    rep_download.appendChild(rep_downloadimg); 

    let rep_date=document.createElement("span"); rep_date.setAttribute("id", "repdate"); 
    grid_item4.appendChild(rep_date);
    rep_date.innerHTML="Date : ";
    rep_date.innerHTML+=report_date[i]; 

    let rep_other=document.createElement("span"); rep_other.setAttribute("id", "repother"); 
    grid_item5.appendChild(rep_other);
    rep_other.innerHTML=" ";
    

}

//medicine list
const medicine_type = ["Capsule", "Tablet", "Drop", "Injection"];
const medicine_name = ["Seclo 10mg", "Napa 500mg", "Noseclear", "Anti-DengueIV"];
const medicine_times = ["1-0-1", "1-1-1", "0-1-0", "0-0-1"];
const medicine_quantity = ["1", "1.5", "2", "1"];
const medicine_duration = ["7 days", "14 days", "1 month", "3 days"];
const medicine_comment = ["Take medicine before eating any food", "Take medicine before eating any food", "In left nose", "In the right arm"];
let med_list=document.getElementById("med_list");
for(let i = 0; i < medicine_type.length; i++){
    let med_bar=document.createElement("div"); med_bar.className=("med_bar");
    let table_container=document.createElement("table"); table_container.className="table-container"; 
    let td1=document.createElement("td"); td1.className="table-item td1";
    let td2=document.createElement("td"); td2.className="table-item td2";
    let td3=document.createElement("td"); td3.className="table-item td3";
    let td4=document.createElement("td"); td4.className="table-item td4";
    let td5=document.createElement("td"); td5.className="table-item td5";
    let td6=document.createElement("td"); td6.className="table-item td6";
    let td7=document.createElement("td"); td7.className="table-item td7";
    let td8=document.createElement("td"); td8.className="table-item td8";
    let tr1=document.createElement("tr"); tr1.className="table-item tr1";
    let tr2=document.createElement("tr"); tr2.className="table-item tr2";
    let tr3=document.createElement("tr"); tr3.className="table-item tr3";

    med_list.appendChild(med_bar);
    med_bar.appendChild(table_container);
    table_container.appendChild(tr1);
    table_container.appendChild(tr2);
    table_container.appendChild(tr3);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr3.appendChild(td8);

    tr1.after(tr2);
    tr2.after(tr3);
    td1.after(td2); td2.after(td3);
    td4.after(td5); td5.after(td6);td6.after(td7);

    var medimg=document.createElement("img"); medimg.setAttribute("id", "medimg");
    td1.appendChild(medimg);td1.setAttribute("rowspan", "3");
    medimg.src="images/capsuleicon.webp";

    td2.setAttribute("id", "medtype"); 
    td2.innerHTML=medicine_type[i];

    td3.setAttribute("id", "medname"); 
    td3.setAttribute("colspan", "3");
    td3.innerHTML=medicine_name[i];

    /*let med_cross=document.createElement("button"); med_cross.setAttribute("id", "medcross"); 
    grid_item3.appendChild(med_cross);
    let med_crossimg=document.createElement("i"); med_crossimg.className="bx bx-x"; 
    med_cross.appendChild(med_crossimg); */

    td4.setAttribute("id", "medtimes"); 
    td4.innerHTML=medicine_times[i]; 

    td5.setAttribute("id", "medquantity"); 
    td5.innerHTML=medicine_quantity[i];
    if(medicine_type[i]=="Drop"){
        td5.innerHTML+=" drops";
    }
    else{
        td5.innerHTML+=" pcs";
    }


    td7.setAttribute("id", "medduration"); 
    td7.innerHTML=medicine_duration[i];

    td8.setAttribute("id", "medcomment");
    td8.setAttribute("colspan", "4"); 
    td8.setAttribute("rowspan", "2");
    td8.innerHTML=medicine_comment[i];

}


/* search doctor */
const doctor_name = ["Yeasin", "Arafat", "Faisal", "Kuddus"];
const doctor_specilaity = ["Opthalmologist", "Dentist", "Dentist", "Medicine"];
const doctor_medical = ["CMC", "Royal Hospital", "National Hospital", "CHEVRON"];
const doctor_mobile = ["01879456565", "01745896547", "01345698745", "01523698741"];
let doc_list=document.getElementById("searchresult");
for(let i = 0; i < doctor_name.length; i++){
    let doc_bar=document.createElement("div"); doc_bar.className=("doc_bar");
    let table_container=document.createElement("table"); table_container.className="doctorinfo"; 
    let td1=document.createElement("td"); td1.className="table-item td1";
    let td2=document.createElement("td"); td2.className="table-item td2";
    let td3=document.createElement("td"); td3.className="table-item td3";
    let td4=document.createElement("td"); td4.className="table-item td4";
    let td5=document.createElement("td"); td5.className="table-item td5";
    
    let tr1=document.createElement("tr"); tr1.className="table-item tr1";
    let tr2=document.createElement("tr"); tr2.className="table-item tr2";
    let tr3=document.createElement("tr"); tr3.className="table-item tr3";
    let tr4=document.createElement("tr"); tr4.className="table-item tr4";
    

    doc_list.appendChild(doc_bar);
    doc_bar.appendChild(table_container);
    table_container.appendChild(tr1);
    table_container.appendChild(tr2);
    table_container.appendChild(tr3);
    table_container.appendChild(tr4);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr3.appendChild(td4);
    tr4.appendChild(td5);

    tr1.after(tr2);
    tr2.after(tr3);
    tr3.after(tr4);
    td1.after(td2); 

    var docimg=document.createElement("img"); docimg.setAttribute("id", "doctorimg");
    td1.appendChild(docimg);td1.setAttribute("rowspan", "4");
    docimg.src="images/docmale.webp";

    td2.setAttribute("id", "doctorname"); 
    td2.innerHTML="Dr. "
    td2.innerHTML+=doctor_name[i];

    td3.setAttribute("id", "doctorspeciality"); 
    td3.innerHTML=doctor_specilaity[i];

    td4.setAttribute("id", "doctormedical"); 
    td4.innerHTML=doctor_medical[i]; 

    td5.setAttribute("id", "doctormobile"); 
    td5.innerHTML=doctor_mobile[i];

}

//edit profile
function Check() {
    let text;
    if (confirm("Do you want to save changes?") == true) {
      text = "Yes";
    } else {
      text = "No";
    }
  }