import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactList = () => {
    const contact = new Contact("Jose", "Pérez", "josePe@gmail.com", true);

    return (
        <div>
            <h1>Your contacts: </h1>
            <ContactComponent contact={contact}></ContactComponent>
        </div>
    );
};

export default ContactList;
