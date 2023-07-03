export const  firstname = "Alex"
export const  surname = "Naidoo"
export let role = "Head of Marketing"

export const display= firstname + " " + surname + " (" + role + ")"
document.querySelector("#alex").innerText = display