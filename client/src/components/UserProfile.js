import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Contact form states
    const [contactData, setContactData] = useState({ name: '', email: '', body: '' });
    const [contactSent, setContactSent] = useState(false);

    useEffect(() => {
        axios.get('/api/profile')
            .then(response => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/contact', contactData);
            if (response.data.message === 'Email sent!') {
                setContactSent(true);
            }
        } catch (error) {
            console.error("Error sending contact form:", error);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>Error loading user data. Please try again.</div>;
    }

    return (
        <div>
            <h2>{userData.name}'s Profile</h2>
            <p>Email: {userData.email}</p>
            {/* Add other user data fields here */}

            {/* Contact Form */}
            <h3>Contact Me</h3>
            {contactSent ? (
                <p>Thank you for contacting me! I'll get back to you shortly.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={contactData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={contactData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea 
                            name="body" 
                            value={contactData.body}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default UserProfile;
