const init = () => {
    const login = document.getElementById('loginButton');
    const register = document.getElementById('registerButton');
    const registerContainer = document.getElementById('registerContainer');
    const loginContainer = document.getElementById('loginContainer');
    const landingContainer = document.getElementById('landingContainer');

    loginContainer.classList.add('d-none');
    registerContainer.classList.add('d-none');

    login.addEventListener('click', function (e) {
        e.preventDefault();
        landingContainer.classList.add('d-none');
        loginContainer.classList.remove('d-none');
    });

    register.addEventListener('click', function (e) {
        e.preventDefault();
        landingContainer.classList.add('d-none');
        registerContainer.classList.remove('d-none');
    });

}

init();