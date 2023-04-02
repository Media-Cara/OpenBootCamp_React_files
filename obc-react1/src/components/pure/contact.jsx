import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>Full name: {contact.name + " " + contact.surname}</h2>
            <h3>Email: {contact.email}</h3>
            <p>{contact.connected ? "Contact Online" : "Contact Offline"}</p>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
