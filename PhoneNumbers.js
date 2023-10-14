// src/components/PhoneNumbers.js

import React, { useState, useEffect } from 'react';

function PhoneNumbers({ contactId }) {
    const [phoneNumbers, setPhoneNumbers] = useState([]);

    useEffect(() => {
        if (!contactId) return;

        // Fetch phone numbers for a specific contact from API
        fetch(`/api/contacts/${contactId}/phones`)
            .then(response => response.json())
            .then(data => setPhoneNumbers(data));
    }, [contactId]);

    return (
        <div>
            <h2>Phone Numbers</h2>
            <ul>
                {phoneNumbers.map(phone => (
                    <li key={phone.id}>{phone.name}: {phone.number}</li>
                ))}
            </ul>
        </div>
    );
}

export default PhoneNumbers;
