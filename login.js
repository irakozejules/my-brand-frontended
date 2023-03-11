



console.log('hello')
const form=document.getElementById("post")

//add event Listener
form.addEventListener("submit", (e)=>{
    e.defaultPrevented;


    // grab values
    const email =document.getElementById("username").value
    const password= document.getElementById("password").value
    const data={email, password}


     // use fetch method to interact with your login api endpoint

     fetch('http://127.0.0.1:4000/api/v1/login',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then ((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.ok) {

          // set our token in LS
          localStorage.setItem("authToken", data.token)
          location.href="/dash.html"
        } else {
          alert(data.message)
        }
      })
      .catch(err => alert(err))
})