// LOGIN 
const pass=document.querySelector("#pass"); 
const showPass=document.querySelector("#showPass"); 
// change the password input type 
showPass.addEventListener("click",function(){
    if(pass.type != "text"){
        pass.type="text";
        showPass.classList.remove("bi-eye-slash");
        showPass.classList.add("bi-eye");

    }
    else{
        pass.type="password";
        showPass.classList.add("bi-eye-slash");
        showPass.classList.remove("bi-eye");
    }

})



