// Load user data from localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadUserData();
});

function loadUserData() {
    // Check if user data exists in localStorage
    if (localStorage.getItem('userData')) {
        // Parse the stored JSON data
        const userData = JSON.parse(localStorage.getItem('userData'));
        // Update input fields with stored data
        document.getElementById('name').value = userData.name;
        document.getElementById('age').value = userData.age;
        document.getElementById('email').value = userData.email;
        document.getElementById('address').value = userData.address;
    }
}


function signbtn() {
    enableInputFields();
}

function editbtn() {
    enableInputFields();
}

function enableInputFields() {
    document.getElementById('name').disabled = false;
    document.getElementById('age').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('address').disabled = false;
}
function validation(){
    if(document.getElementById("name").value == ""
        || document.getElementById("email").value == ""
        || document.getElementById("address").value == "")
        {
        window.alert("There is Something Missing!");
        }
}
function submit() {
    // Get user input data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify({ name, age, email, address }));

    updateDisplayedUserInfo(name, age, address);
    validation();
}

function updateDisplayedUserInfo(name, age, address) {
    document.getElementById('name1').innerText = "Name: " + name;
    document.getElementById('age1').innerText = "Age: " + age +" Years Old";
    document.getElementById('address1').innerText = "Address: " + address;
}


