let userEmail = "ishimwe@gmail.123";
let regex = /\w+@[a-zA-Z]+\.[com|net|rw|org|edu|co|shop|air]/;
let emailValidity = regex.test(userEmail);
console.log(emailValidity)
