"use strict";
let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let userRegExp = /^[A-Za-z0-9.]+$/;
let passRegExp = /^[A-Za-z0-9_.-]+$/;
function register(u, p, e) {
    let err = false;
    let checkEmail = (email) => {
        return String(email).toLowerCase().match(emailRegExp);
    };
    let checkUser = (user) => {
        return String(user).toLowerCase().match(userRegExp);
    };
    let checkPass = (pass) => {
        return String(pass).match(passRegExp);
    };
    if (!checkEmail(e.value)) {
        err = true;
        document.getElementById('emailErr').innerText = 'Hibás e-mail';
    }
    if (!checkUser(u.value)) {
        err = true;
        document.getElementById('userErr').innerText = 'Hibás felhasználó név';
    }
    if (!checkPass(p.value) && p.value.length > 10 || p.value.length < 5) {
        err = true;
        document.getElementById('passErr').innerText = 'Hibás jelszó';
    }
    if (!err) {
        alert('Logged in');
    }
}
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    (_a = document.getElementById("register")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        register(username, password, email);
    });
});
