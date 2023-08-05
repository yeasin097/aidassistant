let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

let item=document.getElementsByClassName("item");

let doctorprofile=document.querySelector(".doctor_profile");
//let searchpatient=document.querySelector(".doctor_search_patient");
let editprofile=document.querySelector(".doctor_edit_profile");

item[0].onclick = function(){
    removeactive();
    this.classList.add("active");
    doctorprofile.style.display="flex";
    //searchpatient.style.display="none";
    editprofile.style.display="none";
}
/*
item[1].onclick = function(){
    removeactive();
    this.classList.add("active");
    doctorprofile.style.display="none";
    //searchpatient.style.display="block";
    editprofile.style.display="none";
}
*/
item[1].onclick = function(){
    removeactive();
    this.classList.add("active");
    doctorprofile.style.display="none";
    //searchpatient.style.display="none";
    editprofile.style.display="block";
}

function removeactive(){
    for(b of item){
        b.classList.remove("active");
    }
}

document.getElementById("current").click();

/*educational qualification
const doctor_eduqua_degree = ["BBBS", "MBBS (Gastroenterology)", "BCS in Health"];
const doctor_eduqua_year = ["2018", "2020", "2024"];
const doctor_eduqua_medname=["Chittagoing Ma o shishu Hospital","Chittagong Medical College(CMC)","DMC"];
let eduqua=document.getElementById("eduqua");
for (let j = 0; j < doctor_eduqua_degree.length; j++) {
    let degree=document.createElement("p");
    let year=document.createElement("p");
    let medname=document.createElement("p");
    degree.className="degree";
    medname.className="medname";
    eduqua.appendChild(degree);
    eduqua.appendChild(year);
    eduqua.appendChild(medname);
    degree.after(year); 
    year.after(medname);
    degree.innerHTML=doctor_eduqua_degree[j];
    year.innerHTML=doctor_eduqua_year[j];
    medname.innerHTML=doctor_eduqua_medname[j];
}


//searchpatient
const patient_name = ["Yeasin"];
const patient_id = ["100001"];
const patient_mobile = ["01879456565"];
const patient_age = ["23"];
let pat_list=document.getElementById("searchresult");
for(let i = 0; i < patient_name.length; i++){
    let pat_bar=document.createElement("div"); pat_bar.className=("pat_bar");
    let table_container=document.createElement("table"); table_container.className="patientinfo"; 
    //table_container.setAttribute("border","3");
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
    let tr4=document.createElement("tr"); tr4.className="table-item tr4";
    let tr5=document.createElement("tr"); tr5.className="table-item tr5";
    let tr6=document.createElement("tr"); tr5.className="table-item tr6";

    pat_list.appendChild(pat_bar);
    pat_bar.appendChild(table_container);
    table_container.appendChild(tr1);
    table_container.appendChild(tr2);
    table_container.appendChild(tr3);
    table_container.appendChild(tr4);
    table_container.appendChild(tr5);
    table_container.appendChild(tr6);

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr3.appendChild(td4);
    tr4.appendChild(td5);
    tr5.appendChild(td6);
    tr5.appendChild(td7);
    tr6.appendChild(td8);

    tr1.after(tr2);
    tr2.after(tr3);
    tr3.after(tr4);
    tr4.after(tr5);
    td1.after(td2); 
    td6.after(td7);

    var patimg=document.createElement("img"); patimg.setAttribute("id", "patientimg");
    td1.appendChild(patimg);td1.setAttribute("rowspan", "4");
    patimg.src="images/patientt.jpg";

    td2.setAttribute("id", "patientid"); 
    td2.innerHTML="ID: "
    td2.innerHTML+=patient_id[i];

    td3.setAttribute("id", "patientname"); 
    td3.innerHTML="Name: "
    td3.innerHTML+=patient_name[i];

    td4.setAttribute("id", "patientmobile"); 
    td4.innerHTML="Mobile: "
    td4.innerHTML+=patient_mobile[i]; 
    
    td5.setAttribute("id", "patientage"); 
    td5.innerHTML="Age: "
    td5.innerHTML+=patient_age[i]; 
    td5.innerHTML+=" years";

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

    td8.setAttribute("id", "createprescription"); 
    let createpresbut=document.createElement("button");
    td8.appendChild(createpresbut);createpresbut.setAttribute("id", "create");
    td8.setAttribute("colspan", "2");
    let preslink=document.createElement("a");
    createpresbut.appendChild(preslink);
    preslink.innerHTML="Create Prescription";
    preslink.setAttribute("target", "_blank");
    preslink.href="CreatePrescription.html";
}
*/

//editprofile
function ShowPass() {
    var x = document.getElementById("editpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
function ShowCPass() {
    var x = document.getElementById("editconfirmpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
function Check() {
    let text;
    if (confirm("Do you want to save changes?") == true) {
      text = "Yes";
    } else {
      text = "No";
    }
  }