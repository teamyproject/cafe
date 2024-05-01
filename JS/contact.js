function search() {
    var input, filter, contactContent, contactInfo, i, txtValue;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    contactContent = document.getElementById("contact-content");
    contactInfo = contactContent.getElementsByClassName("contact-info");

    for (i = 0; i < contactInfo.length; i++) {
        txtValue = contactInfo[i].textContent || contactInfo[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            contactInfo[i].style.display = "";
        } else {
            contactInfo[i].style.display = "none";
        }
    }
}
