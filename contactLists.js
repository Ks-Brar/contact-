

import React, { useState, useEffect } from 'react';

function ContactsList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Fetch all contacts from API
        fetch("/api/contacts")
            .then(response => response.json())
            .then(data => setContacts(data));
    }, []);

    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name}
                        {/* You can add an onClick event here to display the phone numbers for this contact */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactsList;
