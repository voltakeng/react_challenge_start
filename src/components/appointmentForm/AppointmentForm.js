import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          name="title"
          type="text"
          placeholder="Appointment Title"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          required
        />
      </label>
      <br />
      <ContactPicker
        name="contact" 
        value={contact}
        onChange={(e)=>{setContact(e.target.value)}}
        contacts={contacts}
      />
      <br />
      <label>
        <input
          name="date"
          type="date"
          value={date}
          onChange={(e)=>{setDate(e.target.value)}}
          min={getTodayString()}
          required
        />
      </label>
      <br />
      <label>
        <input 
          name="time"
          type="time"
          value={time}
          onChange={(e)=>{setTime(e.target.value)}}
        />
      </label>
      <br />
      <label>
        <input 
          type="submit"
          value="Add Appointment"
        />
      </label>
    </form>
  );
};
