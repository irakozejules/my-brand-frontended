const hum_btn= document.getElementById('hum-btn')
console.log(navbar)
hum_btn.addEventListener('click',()=>{
    const navbar=document.getElementById('navbar')
    if(navbar.classList.contains('mobile-navbar')){
    navbar.classList.remove('mobile-navbar')
    }else{
    navbar.classList.add('mobile-navbar')}
})






const names= document.getElementById("name")
const phone= document.getElementById("phone")
const form= document.getElementById("form")
const erroeMessage= document.getElementById("errorMessage")

form.addEventListener("click", (e) =>{
    const errors=[];

    

    if(names.value.trim() === " "){
        errors.push("Username Required")
        
    }
    

    if(phone.value.length<10)
    {
        errors.push("Password should be greater than 10 characters")
    }

    if(password.value.length>15)
    {
        errors.push("Password should be less than 15 characters")

    }

    
    if(errors.length>0){
        e.preventDefault();
        erroeMessage.toggleAttribute('hidden')
        erroeMessage.innerHTML = errors.join(', '); 
    }
})


// form.addEventListener("click", function(event) {
//     console.log("form")
//   event.preventDefault();
//   let isValid = true;

//   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (email.value === "" ) {
//     isValid=false;
//     email.style.borderColor = "white";
//     out.innerHTML="You must fill your email !!";

//   }
//   else if(!emailRegex.test(email.value)) {
//     isValid = false;
//     email.style.borderColor = "white";
//     out.innerHTML="Invalid Email ";
  
//   }
//   else {
//     email.style.borderColor = "";
//     out.innerHTML="";
//   }

//   if (ton_nom.value === "") {
//     isValid = false;
//     ton_nom.style.borderColor = "white";
//     out_name.innerHTML="You must fill your name !!";
//   } else {
//     ton_nom.style.borderColor = "";
//     out_name.innerHTML="";
//   }

//   if (message.value === "") {
//     isValid = false;
//     message.style.borderColor = "white";
//     out_message.innerHTML="You must fill your message !!";
//   } else {
//     message.style.borderColor = "";
//     out_message.innerHTML="";
//   }

//   if (isValid) {
//     submit();
//   }
// })