const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function (e) {
    if (form.checkValidity()) {
      e.preventDefault(); 
      alert("Thank you for your message! We will get back to you soon.");
      form.reset(); 
    }
  });
});

function openForm(type) {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("loginForm").style.display = type === "login" ? "block" : "none";
    document.getElementById("signupForm").style.display = type === "signup" ? "block" : "none";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function switchForm(to) {
    document.getElementById("loginForm").style.display = to === "login" ? "block" : "none";
    document.getElementById("signupForm").style.display = to === "signup" ? "block" : "none";
}

  function goBack() {
    window.history.back();
  }