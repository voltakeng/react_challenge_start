import React, { useEffect, useState } from "react";
import { TileList } from "../../components/tileList/TileList"

import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({contacts,onAdd}) => {
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ duplicate, setDuplicate ] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      onAdd(name, phone, email); 
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const nameIsDuplicate = contacts.find((contact) => contact.name === name)
    if(nameIsDuplicate === undefined){
      setDuplicate(false)
    } else {
      setDuplicate(true)
    }
  }, [name, contacts])

  return (
    <>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tilelist={contacts} /> 
      </section>
    </>
  );
};
