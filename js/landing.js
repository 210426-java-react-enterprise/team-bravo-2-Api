const initLanding = () => {
    const login = document.getElementById('loginButton');
    const register = document.getElementById('registerButton');
    const registerContainer = document.getElementById('registerContainer');
    const loginContainer = document.getElementById('loginContainer');
    const landingContainer = document.getElementById('landingContainer');
    const collectionTypeContainer = document.getElementById('collectionTypeContainer');
    const collectionItemContainer = document.getElementById('collectionItemContainer');
    const searchItemContainer = document.getElementById('searchItemContainer');

    // if (sessionStorage.JWT) {
    //     landingContainer.classList.add("d-none");
    //     loginContainer.classList.add('d-none');
    //     collectionTypeContainer.classList.remove('d-none');
    //     registerContainer.classList.add('d-none');
    //     loginContainer.classList.add('d-none');
    //     // collectionTypeContainer.classList.add('d-none');
    //     collectionItemContainer.classList.add('d-none');
    //     searchItemContainer.classList.add('d-none');
    // } else {
    //     landingContainer.classList.remove("d-none");
    //     loginContainer.classList.add('d-none');
    //     collectionTypeContainer.classList.remove('d-none');
    //     registerContainer.classList.add('d-none');
    //     loginContainer.classList.add('d-none');
    //     collectionTypeContainer.classList.add('d-none');
    //     collectionItemContainer.classList.add('d-none');
    //     searchItemContainer.classList.add('d-none');
    // }



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

initLanding();