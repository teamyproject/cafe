window.addEventListener('DOMContentLoaded', () => {
    loadUserData();
});

function loadUserData() {
    if (localStorage.getItem('userData')) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        document.getElementById('name').value = userData.name;
        document.getElementById('age').value = userData.age;
        document.getElementById('email').value = userData.email;
        document.getElementById('address').value = userData.address;
        document.getElementById("name1").textContent = "Name: "+userData.name;
        document.getElementById("age1").textContent = "Age: "+userData.age +" Years Old";
        document.getElementById("address1").textContent = "Address: "+userData.address;
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
function validation({name, age, email, address}){
    if(name == "")      window.alert("There is Something Missing!");
    if(email == "")     window.alert("There is Something Missing!");
    if(address == "" )  window.alert("There is Something Missing!");
    if(age == "")       window.alert("There is Something Missing!");
}
function submit() {
    const name    = document.getElementById('name').value;
    const age     = document.getElementById('age').value;
    const email   = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    localStorage.setItem('userData', JSON.stringify({ name, age, email, address }));

    updateDisplayedUserInfo(name, age, address);
    validation({name, age, email, address});
}

function updateDisplayedUserInfo(name, age, address) {
    document.getElementById('name1').innerText = "Name: " + name;
    document.getElementById('age1').innerText = "Age: " + age +" Years Old";
    document.getElementById('address1').innerText = "Address: " + address;
}


