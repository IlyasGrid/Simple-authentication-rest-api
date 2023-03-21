import { FormElement } from "./config.js"

const formToJson = (idForm) => {
    let form = document.getElementById(idForm)
    let formData = new FormData(form)
    let datas = {}
    formData.forEach((element, key) => datas[key] = element)
    return datas;
}
const getInputs = (formName) => {
    const form = FormElement(formName)
    const data = {
        username: form[0].value,
        pwd: form[1].value
    }
    return data

}
const initialForm = (formName) => {

    const form = FormElement(formName)
    for (let i = 0; i < form.length; i++) {
        form[i].value = '';
    }

}
export { initialForm, formToJson ,getInputs}
