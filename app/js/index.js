const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // Get input values 
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be black')
    }
    else{
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email, 'Email Blank')
    }
    else if (!isEmail(emailValue))
    {
        setErrorFor(email, 'Email invalid')

    }
    else{
        setSuccessFor(email);   
    }

    if(passwordValue === "" ){
        setErrorFor(password, 'Password Blank');
    }
   
    else {
        setSuccessFor(password,"");
    }

    if(password2Value === ""){
        setErrorFor(password2, 'Password Blank');
    }
    else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'password Mismatch');
    }
    else
    {
        setSuccessFor(password2,"");

    }


}

function setErrorFor(input,message){
    const formControl = input.parentElement; //.form control
    const small = formControl.querySelector('small');

    //add error message inside small

    small.innerText = message;

    //add error class
    formControl.className= 'form-control error'
    // formControl.classList.remove('success');
    // formControl.classList.add('error');
}

function setSuccessFor(input){
    const formControl = input.parentElement; //.form control
    formControl.className= 'form-control success'

    // formControl.classList.remove('error');
    // formControl.classList.add('success');

}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
