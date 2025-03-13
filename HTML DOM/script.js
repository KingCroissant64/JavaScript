function validateForm(){
    var name=document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var error = document.getElementById('error');
    if (name == "" || email==""){
        error.innerHTML="All fields are required";
        return false;
    }
    error.innerHTML="";
    alert("Form submitted successfully");
    return true;
}