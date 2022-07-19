import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import { h1Style } from "./styles/h1"

function App() {
  const [ contact, setContact ] = useState([]); 

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (newName, newPhone, newEmail) => {
    setContact((prev) => {
      return [
        ...prev,
        {name: newName, phone: newPhone, email: newEmail}
      ]
    }) 
  }

  return (
    <>
      <header>
        <h1 style={h1Style}>Appointment Planner Challenge</h1>
      </header>
      <nav style={{textAlign: 'center'}}>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage onAdd={addContact} contacts={contact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage contacts={contact}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
