const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const btn = document.getElementById("button");

const errorImages = document.getElementsByClassName("error-image");
const errorTexts = document.getElementsByClassName("error-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

btn.addEventListener("click", () => {
    checkField(fname, 0);
    checkField(lname, 1);
    checkEmail(email, 2);
    checkField(pass, 3);
});

function checkField(field, index) {
    const value = field.value.trim();
    
    if (value === "") {
        errorImages[index].style.display = "block";
        errorTexts[index].style.display = "block";
        field.style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
        errorImages[index].style.display = "none";
        errorTexts[index].style.display = "none";
        field.style.border = "1px solid hsl(154, 59%, 51%)";
    }
}

function checkEmail(field, index) {
    const value = field.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "" || !emailPattern.test(value)) {
        errorImages[index].style.display = "block";
        errorTexts[index].style.display = "block";
        field.style.border = "1px solid hsl(0, 100%, 74%)";
    }  else {
        errorImages[index].style.display = "none";
        errorTexts[index].style.display = "none";
        field.style.border = "1px solid hsl(154, 59%, 51%)";
    }
}
