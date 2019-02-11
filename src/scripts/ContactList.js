import makeContact from "./Contact"
import fetchFunctions from "./ContactCollection"

const listAllContacts = () => {
    fetchFunctions.getContacts().then(parsedContacts => {
        const contactContainer = document.createElement("div")
        contactContainer.setAttribute("id", "contactContainer")
        parsedContacts.forEach(contact => {
            contactContainer.appendChild(makeContact(contact))
        })
        document.body.appendChild(contactContainer)
    })
        .then(function () {
            contactContainer.addEventListener("click", function (event) {
                if (event.target.id.startsWith("deleteContact--")) {
                    fetch(`http://localhost:3000/contacts/${event.target.id.split("--")[1]}`, {
                        method: "DELETE"
                    })
                    location.reload();
                }
        })
    })
}

export default listAllContacts