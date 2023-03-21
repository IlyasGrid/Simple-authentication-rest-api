export const $ = (id) => { return document.getElementById(id) }
export const FormElement = (formName)=>{return document.forms[formName].getElementsByTagName("input");}