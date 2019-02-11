const makeContact = (contact) => {
    const contactDiv = document.createElement("div")
    contactDiv.setAttribute("id", `contact${contact.id}`)
    contactDiv.setAttribute("class", "contact")
    contactDiv.innerHTML = `Name: ${contact.name}</br>Phone Number: ${contact.phone}</br>Address: ${contact.address}</br>`
    contactDiv.innerHTML += `<button id="deleteContact--${contact.id}">Delete contact</button>`
    return contactDiv
}

export default makeContact