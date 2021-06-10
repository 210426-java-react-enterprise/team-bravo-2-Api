const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");



const handleLoginSubmit = async(event) => {
    event.preventDefault();

    let loginData = {};

    loginData.username = username.value;
    loginData.password = password.value;

    console.log(username.value, password.value);
    loginUser(loginData);
} 







//document.querySelectorAll('input').forEach(element => element.addEventListener("input"));

submit.addEventListener('click', function(event) {
    
    handleLoginSubmit(event);
})
