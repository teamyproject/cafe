function validateForm() {

    const nameInput = document.forms["form"].elements["name"];
    const passwordInput = document.forms["form"].elements["password"];

    if (nameInput.value === "") {
        alert("Please enter your name.");
        nameInput.foucs();
        return false;
    }

    if (passwordInput.value === "") {
        alert("Please enter a password.");
        passwordInput.foucs();
        return false;
    }

    return true;
}