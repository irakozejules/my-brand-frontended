const hum_btn= document.getElementById('hum-btn')
console.log(navbar)
hum_btn.addEventListener('click',()=>{
    const navbar=document.getElementById('navbar')
    if(navbar.classList.contains('mobile-navbar')){
    navbar.classList.remove('mobile-navbar')
    }else{
    navbar.classList.add('mobile-navbar')}
})

// LOGIN VALIDATION
// LOGIN VALIDATION
// LOGIN VALIDATION

const username= document.getElementById("username")
const password= document.getElementById("password")
const form= document.querySelector("form")
const errorUsername= document.getElementById("errorUsername")
const errorPassword=document.getElementById("errorPassword")
const superName="irakozejules";
const superPassword="12345";

form.addEventListener("submit", (e) =>{
    const errors_pass=[];
    const errors_username=[];

    if(username.value.trim() === ""){
        errors_username.push("Username Required")
    }
    

    if(password.value.length<4)
    {
        errors_pass.push("Password should be greater than 4 characters")
    }

    if(password.value.length>10)
    {
        errors_pass.push("Password should be less than 10 characters")

    }

    
    if(errors_username.length>0 || errors_pass.length>0){
        e.preventDefault();
        errorUsername.toggleAttribute('hidden')
        errorUsername.innerHTML = errors_username.join(', '); 


        errorPassword.toggleAttribute('hidden')
        errorPassword.innerHTML = errors_pass.join(', '); 
    }

    else{
        if(superName===username.value && superPassword===password.value){
            window.location.href="../dashboard.html"
             }
                else if(superPassword!=password.value){
                    errors.push("Wrong password")
                    e.preventDefault();
                    erroeMessage.toggleAttribute('hidden')
                    erroeMessage.innerHTML = errors.join(', ');
                }
                else{
                    errors.push("Wrong credentials")
                    e.preventDefault();
                    erroeMessage.toggleAttribute('hidden')
                    erroeMessage.innerHTML = errors.join(', ');
                    
                }
    }
})











// const login = document.getElementById("login");

// // user= JSON.parse(localStorage.getItem("users"))|| [];

// function login(){
//     if(superName===username.value && superPassword===password.value){
//         window.location.href=""
//     }
//     else{
        
//     }

    // if user exist
    // const targetUser= user.find(user => user.username== username.value);
    // if(targetUser && targetUser.password==password.value){
    //     localStorage.setItem('currentUser', JSON.stringify(targetUser))
    //     window.location.href= "profile.html";
    // }
    // else if(targetUser && targetUser.password != password.value){
    //     alert('Wrong password');
    // }

    // else{
    //     //USER DOES NOT EXIST
    //     // alert('You are not registerd, go to signup');
    //     window.location.href="signup.html"
    // }

// }
// login.onclick= login;




//END OF LOGIN VALIDATION
//END OF LOGIN VALIDATION





//CONTACT VALIDATION
// const names= document.getElementById("names")
// const email= document.getElementById("email")
// const subject= document.getElementById("subject")

// const forms= document.querySelector("form")
// const errorMessages= document.getElementById("errorMessages")

// form.addEventListener("submit", (e) =>{
//     const errors=[];


//     if (!names) {
//            errorMessages += "Names are required.\n";
//              }

//     if(names.value.trim() === ""){
//         errors.push("Username Required")
//     }
    

//     if(password.value.length<10)
//     {
//         errors.push("Password should be greater than 10 characters")
//     }

//     if(password.value.length>15)
//     {
//         errors.push("Password should be less than 15 characters")

//     }

    
//     if(errors.length>0){
//         e.preventDefault();
//         erroeMessage.toggleAttribute('hidden')
//         erroeMessage.innerHTML = errors.join(', '); 
//     }
// })



// const name= document.getElementById("name")
// const phone= document.getElementById("phone")
// const email= document.getElementById("email")
// const subject= document.getElementById("subject")

// const form= document.querySelector("form")
// const erroeMessage= document.getElementById("errorMessage")



    
// function validateContactForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     var errorMessage = "";

  
//     if (!name) {
//       errorMessage += "Name is required.\n";
//     }
  
//     if (!email) {
//       errorMessage += "Email is required.\n";
//     } else if (!email.includes("@") || !email.includes(".")) {
//       errorMessage += "Email is invalid.\n";
//     }
  
//     if (!message) {
//       errorMessage += "Message is required.\n";
//     }
  
//     if (errorMessage) {
//       alert(errorMessage);
//       return false;
//     }
  
//     return true;
//   }
    

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