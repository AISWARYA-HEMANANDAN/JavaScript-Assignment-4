const signUpForm = document.getElementById("signUpForm")
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById("usernameError").innerText = ''
    document.getElementById("emailError").innerText = ''
    document.getElementById("passwordError").innerText = ''
    document.getElementById("confirmpasswordError").innerText = ''

    const username = signUpForm.username.value;
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    const confirmpassword = signUpForm.confirmpassword.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;
    if (username.trim().length < 3) {
        document.getElementById("usernameError").innerText = 'Minimum 3 characters required.'
        isValid = false
    }

    if (!email.match(emailRegex)) {
        document.getElementById("emailError").innerText = 'Enter a valid email address.'
        isValid = false
    }

    if (!password.match(passwordRegex)) {
        document.getElementById("passwordError").innerText = 'Password must be atleast 6 characters long, contain atleast one uppercase letter, one lowercase letter, one number, and one special character.'
        isValid = false
    }

    if (confirmpassword != password) {
        document.getElementById("confirmpasswordError").innerText = 'Passwords does not match.'
        isValid = false
    }

    if (isValid) {
        signUpForm.submit()
        signUpForm.reset()
    }
})


let showStatus = false;
    const showHideButton = document.getElementById('icon')
    showHideButton.addEventListener('click', () => {
        showStatus = !showStatus
        document.getElementById("password").type = showStatus ? 'text' : 'password'
        showHideButton.innerHTML = showStatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
    })

    let confirmpasswordshowStatus = false;
    const showHideButton_confirmpassword = document.getElementById('icn')
    showHideButton_confirmpassword.addEventListener('click', () => {
        confirmpasswordshowStatus = !confirmpasswordshowStatus
        document.getElementById("confirmpassword").type = confirmpasswordshowStatus ? 'text' : 'password'
        showHideButton_confirmpassword.innerHTML = confirmpasswordshowStatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
    })

