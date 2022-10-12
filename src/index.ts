function register(
  u: HTMLInputElement,
  p: HTMLInputElement,
  e: HTMLInputElement
) {}

document.addEventListener("DOMContentLoaded", () => {
  let username = document.getElementById("username") as HTMLInputElement;
  let password = document.getElementById("password") as HTMLInputElement;
  let email = document.getElementById("email") as HTMLInputElement;
  document.getElementById("register").addEventListener("click", function () {
    register(username, password, email);
  });
});
