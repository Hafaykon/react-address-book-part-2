import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';

const baseURL = "https://boolean-uk-api-server.fly.dev/Hafaykon/contact"

export const ContactContext = createContext();

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(baseURL)
                if(!response.ok) throw new Error("Could not retrive contacts from API")
                
                const jsonData = await response.json()

                setContacts(jsonData)
            } catch(error) {console.error("Fetch error:", error);}   
        }
        fetchData()
    }, [])

    return (
        <>
            <ContactContext.Provider value={ {contacts, setContacts} }>
                <Dashboard/>
            
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                </Routes>
            </ContactContext.Provider>
        </>
    );
}

export default App;
