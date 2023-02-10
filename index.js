const hum_btn= document.getElementById('hum-btn')
console.log(navbar)
hum_btn.addEventListener('click',()=>{
    const navbar=document.getElementById('navbar')
    if(navbar.classList.contains('mobile-navbar')){
    navbar.classList.remove('mobile-navbar')
    }else{
    navbar.classList.add('mobile-navbar')}
})