import React from "react";

export const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <from>
          <input placeholder='Contact Name'></input>
          <input placeholder='Contact Phone (###-###-####)'></input>
          <input placeholder='Contact Email'></input>
          <button type="submit">Add Contact</button>
        </from>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
