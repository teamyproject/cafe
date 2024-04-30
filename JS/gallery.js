function showDetails()
{
    document.getElementById('table').style.display = 'block';
    document.getElementById('text').style.display = 'none';
}

function hidden1()
{
    document.getElementById("table").style.display = 'none';
    document.getElementById("text").style.display = 'block';
}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("galleryUL");
    li = ul.getElementsByTagName('li');

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