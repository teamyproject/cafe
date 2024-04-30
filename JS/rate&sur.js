

    function myfunction() {
        alert("thanks for your rating!")
        
    }

    function myfunc(){
        let x = document.forms["myForm"]["firstname"].value;
        if (x == "") {
          alert("please enter your first name");
          return false;
        }
        let y = document.forms["myForm"]["secondname"].value;
        if (y == "") {
          alert("please your second name");
          return false;
        }
        let z = document.forms["myForm"]["phoneno"].value;
        if (z == "") {
            alert("please write you phone number");
            return false;
          }
          let k = document.forms["myForm"]["rate"].value;
          if(k==""){
            alert("Please enter your rate");
            return false;
          }

        
        else{
          document.getElementById("sub").innerHTML = "Thank You for your rating!"

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
