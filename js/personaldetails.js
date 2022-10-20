

function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_pass").value;
    if (password != confirmPassword) {
        document.getElementById("validate").innerHTML="Password is not matched";
        return false;
    }
    return true;
}
