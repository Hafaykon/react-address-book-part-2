import { Link } from "react-router-dom"

const Contact = ({contact}) => {

    return (
        <>
            <h3>{contact.firstName} {contact.lastName} </h3>
            <Link to={`view/${contact.id}`}>View</Link>
        </>
    )
}

export default Contact
