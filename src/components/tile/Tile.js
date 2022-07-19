import React from "react";

export const Tile = ({contact}) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">{contact.name}</p> 
      <p className="title">{contact.phone}</p>      
      <p className="title">{contact.email}</p> 
    </div>
  );
};
