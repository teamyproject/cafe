function search() {
    var input, filter, container, navbar, elements, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    
    // Container Search
    container = document.getElementById("container");
    elements = container.getElementsByTagName("*");
    for (i = 0; i < elements.length; i++) {
        if (elements[i].textContent || elements[i].innerText) {
            txtValue = elements[i].textContent || elements[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                elements[i].style.display = ""; // Match
            } else {
                elements[i].style.display = "none"; // No Match
            }
        }
    }

    // Navbar Search
    navbar = document.getElementById("navbar");
    elements = navbar.getElementsByTagName("*");
    for (i = 0; i < elements.length; i++) {
        if (elements[i].textContent || elements[i].innerText) {
            txtValue = elements[i].textContent || elements[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                elements[i].style.display = ""; // Match
            } else {
                elements[i].style.display = "none"; // No Match
            }
        }
    }
}
