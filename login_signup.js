const container = document.querySelector('.container');
const signInLink = document.querySelector('.SignInLink');
const signUpLink = document.querySelector('.SignUpLink');
signUpLink.addEventListener('click', () => {
    container.classList.add('active');
});
signInLink.addEventListener('click', () => {
    container.classList.remove('active');
});
const item = document.getElementById("pswd");
const inr = document.getElementById("psd");
const password = document.getElementById("password");
const passWord = document.getElementById("passWord");
item.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}
inr.onclick = function(){
    if(passWord.type == "password"){
        passWord.type = "text";
    }else{
        passWord.type = "password";
    }
}
function RegFunction(){
    container.classList.remove('active');
}