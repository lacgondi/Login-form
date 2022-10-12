function register(u, p, e) { }
document.addEventListener("DOMContentLoaded", () => {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    document.getElementById("register").addEventListener("click", function () {
        register(username, password, email);
    });
});
