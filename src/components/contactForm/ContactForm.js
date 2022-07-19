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
      <label>
        <input 
          type="text" 
          name="name"
          placeholder="Contact Name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          required
        />
      </label>
      <br />
      <label>
        <input 
          type="tel"
          name="phone" 
          placeholder="Contact Phone (###-###-####)"
          value={phone}
          onChange={(e) => {setPhone(e.target.value)}}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      </label>
      <br />
      <label>
        <input 
          type="email" 
          name="email" 
          placeholder="Contact Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          required
        />
      </label>
      <br />
      <label>
        <input type="submit" value='Add Contact' />
      </label>
    </form>
  );
};
