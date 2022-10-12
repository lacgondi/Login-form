let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let userRegExp = /^[A-Za-z0-9.]+$/;
let passRegExp = /^[A-Za-z0-9_.-]+$/;

function register(u: HTMLInputElement, p: HTMLInputElement , e: HTMLInputElement) {
    let checkEmail = (email:String)=>{
        return String(email).toLowerCase().match(emailRegExp);
    }
    let checkUser = (user:String)=>{
        return String(user).toLowerCase().match(userRegExp);
    }
    let checkPass = (pass:String)=>{
        return String(pass).match(passRegExp);
    }
    let err:Boolean = false;

    if(!checkEmail(e.value)){
        err=true;
        document.getElementById('emailErr')!.innerText ='Hibás e-mail'
    }
    if(!checkUser(u.value) || u.value.length>30 || u.value.length<6){
        err=true;
        document.getElementById('userErr')!.innerText = 'Hibás felhasználó név';
    }
    if(!checkPass(p.value) || p.value.length>10 || p.value.length<5){
        err =true;
        document.getElementById('passErr')!.innerText = 'Hibás jelszó';
    }
    if(!err){
        alert('Logged in')
    }
}

document.addEventListener("DOMContentLoaded", () => {
  let username = document.getElementById("username") as HTMLInputElement;
  let password = document.getElementById("password") as HTMLInputElement;
  let email = document.getElementById("email") as HTMLInputElement;
  document.getElementById("register")?.addEventListener("click", function () {
    register(username, password, email);
  });
});
