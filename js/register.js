const firstName = document.getElementById('registerFirstName');
const lastName = document.getElementById('registerLastName');
const username = document.getElementById('registerUsername');
const password = document.getElementById('registerPassword');
const email = document.getElementById('registerEmail');
const age = document.getElementById('registerAge');
const submit = document.getElementById('registerSubmit');

const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    let registerData = {};

    registerData.firstName = firstName.value.trim();
    registerData.lastName = lastName.value.trim();
    registerData.age = age.value.trim();
    registerData.email = email.value.trim();
    registerData.username = username.value.trim();
    registerData.password = password.value.trim();

    console.log(registerData)
    UserAPI.register(registerData);
}

const validateInputs = () => {

    let isValid = true;
    if (!firstName.value.trim()) isValid = false;
    if (!lastName.value.trim()) isValid = false;
    if (!username.value.trim()) isValid = false;
    if (!password.value.trim()) isValid = false;
    if (!email.value.trim()) isValid = false;
    if (!age.value) isValid = false;

    isValid ? submit.removeAttribute('disabled') : submit.setAttribute('disabled', true);
}

document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));
submit.addEventListener('click', function (event) {
    // event.preventDefault();

    handleRegisterSubmit(event);
})