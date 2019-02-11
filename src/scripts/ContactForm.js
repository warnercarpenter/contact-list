import fetchFunctions from "./ContactCollection"

const createForm = () => {
    const formDiv = document.createElement("div")
    formDiv.setAttribute("id", "formDiv")
    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("name", "nameInput")
    nameInput.setAttribute("placeholder", "Enter a name")
    const phoneInput = document.createElement("input")
    phoneInput.setAttribute("type", "text")
    phoneInput.setAttribute("name", "phoneInput")
    phoneInput.setAttribute("placeholder", "Enter a phone number")
    const addressInput = document.createElement("input")
    addressInput.setAttribute("type", "text")
    addressInput.setAttribute("name", "addressInput")
    addressInput.setAttribute("placeholder", "Enter an address")
    const submitButton = document.createElement("button")
    submitButton.innerHTML = "Submit"
    formDiv.appendChild(nameInput)
    formDiv.appendChild(phoneInput)
    formDiv.appendChild(addressInput)
    formDiv.appendChild(submitButton)
    document.body.appendChild(formDiv)

    submitButton.addEventListener("click", function(){
        const name = nameInput.value
        nameInput.value = ""
        const phone = phoneInput.value
        phoneInput.value = ""
        const address = addressInput.value
        addressInput.value = ""
        fetchFunctions.addContacts(name, phone, address)
    })
}

export default createForm