
// get mobileMenu used 
const hamburger=document.getElementById("hamburgerBTN");
const closeMobileMenu=document.getElementById("closeMobileMenu");
const mobileMenu=document.getElementById("mobileMenu");


hamburger.addEventListener("click",function displayMobileMenu(){
    if(mobileMenu.style.display != "flex"){
        mobileMenu.style.display="flex";
    }
});

closeMobileMenu.addEventListener("click",function closeMobileMenu(){
    mobileMenu.style.display="none";
})



// Section 4   
const BLDesc1=document.querySelector("#BLDesc1"); 
const BLDesc2=document.querySelector("#BLDesc2"); 
const BLDesc3=document.querySelector("#BLDesc3"); 

function showDescription(id){
    if(id == "produ" ){
        BLDesc1.style.display="block";
        BLDesc2.style.display="none";
        BLDesc3.style.display="none";
    }

    if(id == "users" ){
        BLDesc2.style.display="block";
        BLDesc1.style.display="none";
        BLDesc3.style.display="none";
    }

    if(id == "culture" ){
        BLDesc3.style.display="block";
        BLDesc2.style.display="none";
        BLDesc1.style.display="none";
    }

}






