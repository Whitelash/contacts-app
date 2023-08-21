import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom"

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
    id: "1",
    name: "Coco",
    email: "coco@gmail.com",
    },
];

  const renderContactList = contacts.map((contact) => {
    return (
    
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div class = "main">
      <h2>Contact list</h2>
      <div className="ui celled list">
      {renderContactList}</div>
      <div>
        <Link to = "/add">
        <button className="ui button blue right">Add Contact</button>
        </Link>
        
      </div>
      


    </div>
    
  );
};

export default ContactList;
