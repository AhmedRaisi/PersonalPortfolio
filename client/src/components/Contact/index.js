import React, { useState } from 'react';
import './styles.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:youremail@example.com?subject=Contact from ${formData.name}&body=${formData.message} from ${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="inputGroup">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="inputGroup">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
