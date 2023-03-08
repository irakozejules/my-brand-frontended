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
const fullname= document.getElementById("fullname")
const password= document.getElementById("password")
const form= document.querySelector("form")
const errorUsername= document.getElementById("errorUsername")
const errorPassword=document.getElementById("errorPassword")
const errorNames= document.getElementById("errorNames")
const superName="irakozejules";
const superPassword="12345";

form.addEventListener("submit", (e) =>{
    const errors_pass=[];
    const errors_username=[];
    const errors_Names=[];
    const errors_Password=[];


    if(fullname.value.trim()=== ""){
        errors_Names.push("Enter your full names")
    }
    if(fullname.value.length<6){
        errors_Names.push("Enter full names")
    }

    if(username.value.trim() === ""){
        errors_username.push("Email Required")
    }
    

    if(password.value.length<4)
    {
        errors_Password.push("Password should be greater than 4 characters")
    }

    if(password.value.length>10)
    {
        errors_Password.push("Password should be less than 10 characters")

    }

    
    if(errors_username.length>0 || errors_Password.length>0 || errorNames>0){
        e.preventDefault();
        errorUsername.toggleAttribute('hidden')
        errorUsername.innerHTML = errors_username.join(', '); 


        errorPassword.toggleAttribute('hidden')
        errorPassword.innerHTML = errors_Password.join(', '); 

        errorNames.toggleAttribute('hidden')
        errorNames.innerHTML= errors_Names.join(', ');
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