function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const fullNameInput = document.getElementById('fullname');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phonenumber');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');
    const checkBoxInput = document.querySelector('.checkbox');

    if (fullNameInput.value === "") {
        alert("Please enter your full name.");
        fullNameInput.focus();
        return false;
    }

    if (usernameInput.value === "") {
        alert("Please enter a username.");
        usernameInput.focus();
        return false;
    }

    if (emailInput.value === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return false;
    }

    // Validate email format using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }

    if (phoneNumberInput.value === "") {
        alert("Please enter your phone number.");
        phoneNumberInput.focus();
        return false;
    }

    if (passwordInput.value === "") {
        alert("Please enter a password.");
        passwordInput.focus();
        return false;
    }

    if (confirmPasswordInput.value === "") {
        alert("Please confirm your password.");
        confirmPasswordInput.focus();
        return false;
    }

    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match.");
        confirmPasswordInput.focus();
        return false;
    }

    if (!checkBoxInput.checked) {
        alert("Please accept the terms and conditions.");
        return false;
    }

    // If all validations pass, you can submit the form
    return true;
}

// Add event listener to the form for form submission event
document.getElementById('form').addEventListener('submit', validateForm);