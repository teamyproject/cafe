window.addEventListener('DOMContentLoaded', () => {
    loadUserData();
});

function validateForm() {
    const nameInput = document.forms["myform"]["name"];
    const numberInput = document.forms["myform"]["number"];
    const emailInput = document.forms["myform"]["email"];
    const passwordInput = document.forms["myform"]["password"];
    const placeRadioButtons = document.querySelectorAll('input[name="place"]');

    if (nameInput.value === "") {
        alert("Please enter your name.");
        nameInput.focus(); 
        return false; 
    }

    if (numberInput.value === "") {
    alert("Please enter your phone number.");
    numberInput.focus();
    return false;
    }

    if(emailInput.value===""){
        alert("Please enter your email.");
        numberInput.focus();
        return false;
    }

    if (passwordInput.value === "") {
    alert("Please enter a password.");
    passwordInput.focus();
    return false;
    }

    if (!placeSelected) {
    alert("Please choose a sitting place.");
    return false;
    }

    return true;
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function storeFormData() {
    const form = document.forms["myform"];
    const name = form.elements["name"].value;
    const number = form.elements["number"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    const message = form.elements["message"].value;
    const place = form.elements["place"].value; // Get selected radio button value

    const formData = {name,number,email,password,message,place};

    const formDataString = JSON.stringify(formData);
    localStorage.setItem("bookingFormData",formDataString);

    console.log("Form data stored successfully!");
}
document.forms["myform"].addEventListener("submit", storeFormData);
