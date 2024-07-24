// src/Contact.js

import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message has been sent successfully!');
    };

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input name='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
