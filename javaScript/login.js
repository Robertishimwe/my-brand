


//set admin email && password by default

// localStorage.setItem("adminEmail","andela@andela.com")
// localStorage.setItem("adminPass","Andela")


function login(){
let userEmail = document.getElementById("user_email").value;
let password = document.getElementById("user-password").value;
let error_message = document.getElementById("error_message");
let regex = /\w+@[a-zA-Z]+\.[com|net|rw|org|edu|co|shop|air]/;
let regexPass = /\w|\d/;
let passwordValidity = regexPass.test(password);
let emailValidity = regex.test(userEmail);
let adminEmail = "andela@gmail.com"  //localStorage.getItem("adminEmail")
let adminPass =  "Andela"//localStorage.getItem("adminPass")
console.log(emailValidity)
console.log("pass:"+ passwordValidity)


//end of declaration part

//redirect to admin panel
 if(userEmail == adminEmail && password == adminPass){
   location = "../html/control_panel.html"; 
 }
 //email is valid but password is empty
 else if(emailValidity == true & password ==""){
   let msg = "Enter your Password"
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="none";
// correct email but invalid password
 }else if(userEmail == adminEmail & passwordValidity == false){
   let msg = "Enter Your Password"
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="none";
   
}
//correct email but passward doesn't mutch 
else if(userEmail == adminEmail & password != adminPass){
   let msg = "Incorrect password";
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="none";
   
}else if(userEmail == ""){
      let msg1 = "Please Enter Your Email";
      error_message.style.display="block";
      error_message.innerText = msg1;
      document.getElementById("user_email").style.border="1px solid red";
 }else if(emailValidity == false){
         let msg = "Invalid Email!";
         error_message.style.display="block";
          error_message.innerText = msg;
         document.getElementById("user_email").style.border="1px solid red";
         document.getElementById("user-password").style.border="none";
 }else if(emailValidity == true && passwordValidity == false){
   let msg = "Please Enter Your Password";
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="1px solid red";

 }
 else{
   let msg = "Entered credentials doesn't match any account";
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="none";
   document.getElementById("user-password").style.border="none";
 }


}