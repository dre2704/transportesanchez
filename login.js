const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener ('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value,
    }

    console.log(data)
})
//otra opción de código
function validarLogin() {
    {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    }
    if (username === "" || password === "") {
      alert("Por favor, complete todos los campos");
      return false;
    }
    return true;
}