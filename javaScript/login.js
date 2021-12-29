function login(){
let userEmail = document.getElementById("user_email").value;
let password = document.getElementById("user-password").value;
let loginbtn = document.getElementById("loginbtn");
let error_message = document.getElementById("error_message");


   if(userEmail == ""){
      let msg1 = "Please Enter Your Email";
      error_message.style.display="block";
      error_message.innerText = msg1;
      document.getElementById("user_email").style.border="1px solid red";

   }else if(!(userEmail == "andela@andela.com")){
      let msg = "Incorrect Email!";
      error_message.style.display="block";
      error_message.innerText = msg;
      document.getElementById("user_email").style.border="1px solid red";
      document.getElementById("user-password").style.border="none";
      
   }
   
   
   else if(password == ""){
      let msg2 = "Please Enter Your Password";
      error_message.style.display="block";
      error_message.innerText = msg2;
      document.getElementById("user_email").style.border="1px solid green";
      document.getElementById("user-password").style.border="1px solid red";

   }else if(userEmail == "andela@andela.com" && !(password == "Andela")){
      let msg = "Incorrect Password!";
      error_message.style.display="block";
      error_message.innerText = msg;
      document.getElementById("user_email").style.border="1px solid green";
      document.getElementById("user-password").style.border="1px solid red";
      
      
   }
   
   
   else{
      location = "../html/control_panel.html";
   }

}