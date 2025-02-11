import { useContext } from "react"
import { ContactContext} from "../App"
import Contact from "./Contact"


const ContactList = () => {
    const contactContext = useContext(ContactContext)

    return (
        <>
            <ul>
                {contactContext.contacts.map((contact, index) => <li key={index}><Contact contact={contact}/></li>  )}
            </ul>
        </>
    )
}

export default ContactList
