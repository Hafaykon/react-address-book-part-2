import { useContext } from "react"
import { ContactContext} from "../App"
import ContactList from "./ContactList"


const Dashboard = () => {
    const contactContext = useContext(ContactContext)

    if (!contactContext.contacts.length) {
        return <p>Loading contacts...</p>;
    }

    return (
        <>
            <main className="dashboard-layout">
                <ContactList/>
            </main>
        </>
    )
}

export default Dashboard
