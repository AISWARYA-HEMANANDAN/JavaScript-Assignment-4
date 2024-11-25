const loginForm = document.getElementById("loginForm")
loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById("emailError").innerText = ''
    document.getElementById("passwordError").innerText = ''

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").innerText = 'Enter a valid email address.'
        isValid = false
    }

    if (!password.match(passwordRegex)) {
        document.getElementById("passwordError").innerText = 'Password must be atleast 6 characters long, contain atleast one uppercase letter, one lowercase letter, one number, and one special character.'
        isValid = false
    }

    if (isValid) {
        loginForm.submit()
        loginForm.reset()
    }

})