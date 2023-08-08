let subMenu=document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a#hometrans');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });


var btn=document.getElementsByClassName("btn");
var banner=document.getElementById("banner");
var contenthead=document.getElementById("contenthead");
var content=document.getElementById("content");

btn[0].onclick = function(){
    banner.src="images/easyprescriptioncreation.jpg"
    contenthead.innerHTML="Easy Prescription Creation";
    content.innerHTML="This website is for doctors to make it easy for them to write prescriptions";
    
    animation();
    this.classList.add("active");

}

btn[1].onclick = function(){
    banner.src="images/diseasehistoryhistory.jpg"
    contenthead.innerHTML="Disease History";
    content.innerHTML="Easier access to history of disease the patient faced";
    animation();
    this.classList.add("active");
}

btn[2].onclick = function(){
    banner.src="images/diseasehistory1.jpg"
    contenthead.innerHTML="Disease Occurance";
    content.innerHTML="Access to the information of nearby occuring diseases";

    animation();
    this.classList.add("active");
}

btn[3].onclick = function(){
    banner.src="images/medicalreport.webp"
    contenthead.innerHTML="Medical Reports"
    content.innerHTML="Access to all sorts of medical information of a patient within clicks"
    animation();
    this.classList.add("active");
}

btn[4].onclick = function(){
    banner.src="images/writingnote.webp"
    contenthead.innerHTML="Writing Notes";
    content.innerHTML="Patients can write notes on their health condition and store them"
    animation();
    this.classList.add("active");
}
function animation(){
    banner.classList.add("zoom");
    setTimeout(function(){
        banner.classList.remove("zoom");
    },500);

    for(b of btn){
        b.classList.remove("active");
    }
}
