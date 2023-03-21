import { $ } from "./config.js"
import { hideLoginForm, hideRegisterForm, } from "./display.js"
import { login, register } from "./fetch.js"
import { formToJson, getInputs } from "./utils.js"




$('registerBtn').addEventListener('click', () => { hideLoginForm() })
$('loginBtn').addEventListener('click', () => { hideRegisterForm() })

$('loginForm').addEventListener('submit', async () => {

    const user = getInputs("loginForm");
    await login(user);
})


$('registerForm').addEventListener('submit', async () => {
    const user = getInputs("registerForm");
    await register(user);
})