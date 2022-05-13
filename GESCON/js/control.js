const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {

            signupForm.reset();
            window.location.href = "../login.html"
            
            
        })
    
})

