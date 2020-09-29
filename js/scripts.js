function checkmissingfields_register()
            {
                // check missing fields in register form
                
                var userid = document.getElementById('userid').value;
                var firstname = document.getElementById('firstname').value;
                var middlename = document.getElementById('middlename').value;
                var lastname = document.getElementById('lastname').value;
                var password = document.getElementById('password').value;
                var repassword = document.getElementById('repassword').value;

                if((userid =="")||(firstname =="")||(middlename =="")||(lastname =="")||(password =="")||(repassword ==""))
                {
                document.getElementById('userid').style.borderColor = "red";
                document.getElementById('firstname').style.borderColor = "red";
                document.getElementById('middlename').style.borderColor = "red";
                document.getElementById('lastname').style.borderColor = "red";
                document.getElementById('password').style.borderColor = "red";
                document.getElementById('repassword').style.borderColor = "red";
                alert("ERROR! "  +"\n"
                +"\n"
                +"Please fill out the missing fields." );

                
                }else{
                  
                  document.getElementById('password').style.borderColor = "red";
                  document.getElementById('repassword').style.borderColor = "red";
                }
              }


