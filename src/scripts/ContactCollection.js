import listAllContacts from "./ContactList";

const fetchFunctions = {

    getContacts() {
        return fetch("http://localhost:3000/contacts")
            .then(contacts => contacts.json())
            .then(parsedContacts => parsedContacts)
    },

    addContacts(name, phone, address) {
        let newContact = {}
        newContact.name = name
        newContact.phone = phone
        newContact.address = address
        fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        }).then(function() {
            document.getElementById("contactContainer").remove()
        }).then(listAllContacts)
    }

}

export default fetchFunctions