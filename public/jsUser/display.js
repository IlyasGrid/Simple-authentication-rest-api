import { $, FormElement } from "./config.js";
import { initialForm } from "./utils.js";


const hideRegisterForm = () => {
    console.log("befor " + FormElement("registerForm")[0].value)
    initialForm('registerForm');

    $('registerContainer').classList.add('hidden')
    $('loginContainer').classList.remove('hidden')
}



const hideLoginForm = () => {
    console.log("befor " + FormElement("loginForm")[0].value)
    initialForm('loginForm')
    console.log("after " + FormElement("loginForm")[0].value)

    $('registerContainer').classList.remove('hidden')
    $('loginContainer').classList.add('hidden')
}


export { hideLoginForm, hideRegisterForm }