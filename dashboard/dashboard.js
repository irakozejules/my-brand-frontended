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

const names= document.getElementById("names")
const email= document.getElementById("email")
const password= document.getElementById("password")
const role= document.getElementById("role")
// signup button
const signup = document.getElementById('signup');
const form= document.querySelector("form")

const errorMessage= document.getElementById("errorMessage")

form.addEventListener("submit", (e) =>{
    const errors=[];

    if(names.value.trim() === ""){
        errors.push("Names are required")
    }
   if(email.value.trim()===""){
    errors.push("Email is required")
   }

    if(password.value.length<10)
    {
        errors.push("Password should be greater than 10 characters")
    }

    if(password.value.length>15)
    {
        errors.push("Password should be less than 15 characters")

    }

    
    if(errors.length>0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden')
        errorMessage.innerHTML = errors.join(', '); 
    }
})










users = JSON.parse(localStorage.getItem('users')) || [];

function saveUser() {
  let user = {};
  user.firstName = names.value.split(' ')[0];
  user.lastName = names.value.split(' ')[1];
  user.email = email.value
  user.password = password.value
  user.role = role.value
  users.push(user);
  const stringUsers = JSON.stringify(users);
  localStorage.setItem('users', stringUsers);
}

function displayUsers() {
  users.forEach((user, index) => {
    listUsers.innerHTML += `<li>user number ${index} is ${user.firstName} ${user.lastName}</li>`
  })
}

signup.onclick = saveUser;