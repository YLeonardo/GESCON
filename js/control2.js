//login
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    const MJSERROR = () =>{
        Swal.fire(
            "Usuario o Contraseña incorrecta",
            "",
            "error"
        )
    }
    
    //*************** */
    //LOCALSTORAGE
    //*************** */
    
    
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            //Usuario dentro del sistema
           /*  let nombre = document.getElementById("signup-name").value;
            localStorage.setItem('valorLS', nombre); */
            window.location.href = "../asistente.html"
        })
        .catch((error) => {
            MJSERROR();  
          });
    
})