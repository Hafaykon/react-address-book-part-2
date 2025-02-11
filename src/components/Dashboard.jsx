import { useContext } from "react"
import { ContactContext} from "../App"



const Dashboard = () => {
    const contactContext = useContext(ContactContext)

    return (
        <>
            <p>Dashboard Componenetrtrtrtr {contactContext.contacts[0]}</p>
        </>
    )
}

export default Dashboard