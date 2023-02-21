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
const message=document.getElementById("message")
const email=document.getElementById("email")


const errorNames= document.getElementById("errorNames")
const errorPhone= document.getElementById("errorPhone")
const errorEmail= document.getElementById("errorEmail")
const errorMessage= document.getElementById("errorMessage")



function isValidEmail(email) {
    // regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // check if the email matches the regular expression
    return emailRegex.test(email);
  }



form.addEventListener("click", (e) =>{
    e.preventDefault()
    const error_Names=[];
    const error_Phone=[];
    const error_Email=[];
    const error_Message=[];
    
    console.log(errorEmail)

    

    if(names.value.trim() === " "){
        error_Names.push("Your names are Required")
        
    }
    if(names.value.length<1){
        error_Names.push("Your names are Required")
        
    }
    

    if(phone.value.trim()=== " ")
    {
        error_Phone.push("Enter your phone number")
    }
    if(phone.value.length<10)
    {
        error_Phone.push("Phone number should be more than 10 digits")
    }


    if(isValidEmail(email))
    {
        error_Email.push("Your email is valid")
        console.log(`The email ${email} is not valid.`);

    }else {
        console.log(`The email ${email} is not valid.`);
        error_Email.push("Your email is not valid")
      }

    // if(message.value.trim()===""){
    //     errors.push("Enter your message")
    // }

    if(message.value.length<2){
        error_Message.push("Write your message")
    }

    

    
    if(error_Names.length>0 || error_Phone.length>0 || error_Email.length>0 || error_Message>0){
        e.preventDefault();
        errorNames.toggleAttribute('hidden')
        errorNames.innerHTML = error_Names.join(', '); 


        errorPhone.toggleAttribute('hidden')
        errorPhone.innerHTML = error_Phone.join(', '); 

        errorEmail.toggleAttribute('hidden')
        errorEmail.innerHTML= error_Email.join(', ');

        errorMessage.toggleAttribute('hidden')
        errorMessage.innerHTML=error_Message.join(', ');
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