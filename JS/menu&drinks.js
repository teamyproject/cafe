

function myfunc(){
    document.getElementById("ppp1").innerHTML = "Thank You for your feedback"}


    

      function myfunc(){
        let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("please enter your name");
          return false;
        }
        let y = document.forms["myForm"]["phone-number"].value;
        if (y == "") {
          alert("please write you phone number");
          return false;
        }
        
        else{
          document.getElementById("ppp1").innerHTML = "Thank You for your feedback"

        }

      }



      function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }