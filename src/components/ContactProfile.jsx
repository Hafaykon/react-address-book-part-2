import { useState, useEffect, useContext } from 'react'
import { ContactContext } from '../App'
import { useParams } from 'react-router-dom'


function ContactProfile() {
  const contactContext = useContext(ContactContext)
  const [contact, setContact] = useState(null)
  const { id } = useParams(); 


  useEffect(() => {
    if (contactContext.contacts && id) {
      setContact(contactContext.contacts.find((person) => Number(person.id) === Number(id)));
    }
  }, [contactContext.contacts, id]);

  if (!contact) return (<p>Loading...</p>)

  return (
    <article className='col m-5'>
      <div className='container border border-grey rounded-end p-3'>
        <img src={contact.profileImage} alt="https://www.gravatar.com/avatar/Kaylin.Aufderhar@yahoo.com?s=120&d=identicon"/>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p><b>Gender:</b> {contact.gender}</p>
        <p><b>From:</b> {contact.city}</p>
        <p><b>Email:</b> {contact.email}</p>
      </div>
    </article>
  )
}

export default ContactProfile