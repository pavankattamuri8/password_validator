function myFunction() {
    // x=document.getElementById("hello").innerHTML="hello";
    const passwordInput = document.getElementById("pass");
    const password = passwordInput.value;
    const passwordValidationMessage = document.getElementById("password-validation-message");
    const passwordStrengthMessage = document.getElementById("password-strength");
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    let valid = true;
    let message = "Password is valid.";
    let strengthMessage = "";

    if ( !uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password) || !specialCharRegex.test(password)) {
        valid = false;
        message = "Password must contains this criteria :one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    if (password.length >= 8) {
        strengthMessage = "Strong";
    } else if (password.length >= 6) {
        strengthMessage = "Medium";
    } else {
        strengthMessage = "Weak";
    }

    passwordValidationMessage.innerHTML = message;
    passwordStrengthMessage.innerHTML = `Password Strength: ${strengthMessage}`;
}
