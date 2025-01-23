let email = document.querySelector("#email");
let password = document.querySelector("#password");
let pasConf = document.querySelector("#pasConf");
let submitBtn = document.querySelector("#submitBtn");
let err = document.querySelector(".err");

submitBtn.addEventListener("click", (e) => {
  let validInput = false;

  // valid email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  let validemail = email.value.trim();
  // valid email

  if (email.value.trim() === "" || password.value.trim() === "") {
    err.style.display = "flex";
    err.classList.remove("active");
    err.textContent = "Please Fill this Fields";
  } else if (pasConf.value.trim() === "") {
    err.style.display = "flex";
    err.classList.remove("active");
    err.textContent = "Please Fill this Fields";
  } else if (!isValidEmail(validemail)) {
    err.style.display = "flex";
    err.classList.remove("active");
    err.textContent = "Not valid email";
  } else if (password.value.trim() !== pasConf.value.trim()) {
    err.style.display = "flex";
    err.classList.remove("active");
    err.textContent = "Passwords not matched";
  } else if (
    email.value.trim() !== "" &&
    password.value.trim() !== "" &&
    pasConf.value.trim() !== "" &&
    isValidEmail(validemail)
  ) {
    err.style.display = "flex";
    err.classList.add("active");
    err.textContent = "valid data entry! Thank You";
    validInput = true;
  }
  if (validInput === false) {
    e.preventDefault();
  }
});
