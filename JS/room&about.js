function mDown(obj){
    obj.style.background="#383898";
}

function mUp(obj){
    obj.style.background="none";
}

function mUp_link(obj){
    obj.style.color="black";
}

function mDown_link(obj){
    obj.style.color="#383898";
}


function validateForm() {
    var name = document.getElementById("name_123").value;
    var email = document.getElementById("email_123").value;
    var comment = document.getElementById("comment_123").value;
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (comment == ""){
        alert("please enter your comment.");
        return false;
    }

    return true;
}

function saveUsername() {
    var username = document.getElementById('name_123').value;

    localStorage.setItem('username', username);

    if(localStorage.getItem('username')) {
        alert('Username saved successfully!');
    }
    else {
        alert('Username not saved');
    }
}

function returnName() {
    if(localStorage.getItem('username')) {
        document.getElementById('savedUsername').innerText = 'UserName: ' + localStorage.getItem('username');
    }
    else {
        return false;
    }
}

function mEnter(obj) {
    obj.style.background="rgb(207, 207, 0)";
}

function mLeave(obj) {
    obj.style.background="none";
}

function myFunction_123() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput_123");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul-1");
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