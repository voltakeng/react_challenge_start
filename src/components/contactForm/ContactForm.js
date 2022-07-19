import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input id="name" name="name" placeholder='Contact Name' />
      <input id="phone" name="phone" placeholder='Contact Phone (###-###-####)' />
      <input id="email" name="email" placeholder='Contact Email' />
      <input type="submit" value='Add Contact' />
    </form>
  );
};
