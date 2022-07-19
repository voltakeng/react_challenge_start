import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList"

import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({contacts,onAdd}) => {
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
        // name: document.getElementById('name').value, 
        // phone: document.getElementById('phone').value, 
        // email: document.getElementById('email').value
    })
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
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
        <TileList contacts={contacts} /> 
      </section>
    </div>
  );
};
