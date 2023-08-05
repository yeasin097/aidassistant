let signupcontent=document.querySelector(".signupformcontainer"),
    next1=document.querySelector(".Next"),
    prev2=document.querySelector(".Previous2"),
    next2=document.querySelector(".Next2"),
    prev3=document.querySelector(".Previous3"),
    next3=document.querySelector(".Next3"),
    prev4=document.querySelector(".Previous4"),
    next4=document.querySelector(".Next4"),
    signupcontent1=document.querySelector(".stage1-content"),
    signupcontent2=document.querySelector(".stage2-content"),
    signupcontent3=document.querySelector(".stage3-content"),
    signupcontent4=document.querySelector(".stage4-content");

    signupcontent2.style.display="none";
    signupcontent3.style.display="none";
    signupcontent4.style.display="none";
    
    function stage1to2(){
        signupcontent1.style.display="none";
        signupcontent2.style.display="block";
        signupcontent3.style.display="none";
        signupcontent4.style.display="none";
        document.querySelector(".stageno-1").innerText="✔";
        document.querySelector(".stageno-1").style.backgroundColor="#52ec61";
        document.querySelector(".stageno-1").style.color="#fff";
    }
    function stage2to1(){
        signupcontent1.style.display="block";
        signupcontent2.style.display="none";
        signupcontent3.style.display="none";
        signupcontent4.style.display="none";
        document.querySelector(".stageno-1").innerText="1";
        document.querySelector(".stageno-1").style.backgroundColor="#e8f8f8";
        document.querySelector(".stageno-1").style.color="#125973";
    }
    function stage2to3(){
        signupcontent1.style.display="none";
        signupcontent2.style.display="none";
        signupcontent3.style.display="block";
        signupcontent4.style.display="none";
        document.querySelector(".stageno-2").innerText="✔";
        document.querySelector(".stageno-2").style.backgroundColor="#52ec61";
        document.querySelector(".stageno-2").style.color="#fff";
    }
    function stage3to2(){
        signupcontent1.style.display="none";
        signupcontent2.style.display="block";
        signupcontent3.style.display="none";
        signupcontent4.style.display="none";
        document.querySelector(".stageno-2").innerText="2";
        document.querySelector(".stageno-2").style.backgroundColor="#e8f8f8";
        document.querySelector(".stageno-2").style.color="#125973";
    }
    function stage3to4(){
        signupcontent1.style.display="none";
        signupcontent2.style.display="none";
        signupcontent3.style.display="none";
        signupcontent4.style.display="block";
        document.querySelector(".stageno-3").innerText="✔";
        document.querySelector(".stageno-3").style.backgroundColor="#52ec61";
        document.querySelector(".stageno-3").style.color="#fff";
    }
    function stage4to3(){
        signupcontent1.style.display="none";
        signupcontent2.style.display="none";
        signupcontent3.style.display="block";
        signupcontent4.style.display="none";
        document.querySelector(".stageno-3").innerText="3";
        document.querySelector(".stageno-3").style.backgroundColor="#e8f8f8";
        document.querySelector(".stageno-3").style.color="#125973";
    }
