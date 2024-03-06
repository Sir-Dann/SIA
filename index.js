const txtusername = document.querySelector('#username');
const txtpassword = document.querySelector('#password');
const lblusern = document.querySelector('.lblusername');
const lblpass = document.querySelector('.lblpassword');

txtusername.addEventListener("click", function(){
    lblusern.style.bottom = '200px'; 
    lblusern.style.backgroundColor = "#00001d";
});

txtpassword.addEventListener("click", function(){
    lblpass.style.bottom = '115px'; 
    lblpass.style.backgroundColor = "#00001d";
});