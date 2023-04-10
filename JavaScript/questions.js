// QUESTION PAGE 
const tIcon=document.querySelector(".tIcon"); 
const qsDesc=document.querySelector(".qsDesc"); 
const btnQS=document.querySelector(".btnQS"); 

btnQS.addEventListener("click",function(){
    if(qsDesc.style.display !="flex"){
        qsDesc.style.display ="flex";
    }
    else{
        qsDesc.style.display="none";

    }
    
})

