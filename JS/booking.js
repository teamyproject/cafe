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


// function loadUserData() {
//     // Check if user data exists in localStorage
//     if (localStorage.getItem('userData')) {
//         // Parse the stored JSON data
//         const userData = JSON.parse(localStorage.getItem('userData'));
//         // Update input fields with stored data
//         document.getElementById('NAME').value = userData.NAME;
//         document.getElementById('NUMBER').value = userData.NUMBER;
//         document.getElementById('EMAIL').value = userData.EMAIL;
//         document.getElementById('PASSWORD').value = userData.PASSWORD;
//     }
// }

