import React, { useState } from 'react';
import { Element } from 'react-scroll';
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
        const mailtoLink = `mailto:ahmedalraisi@gmail.com?subject=Contact from ${formData.name}&body=${formData.message} from ${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <Element name="contactSection">
            <div className="contactContainer">
                <h1>Contact Me</h1>
                <div className="contactCard">
                    <p>Want to collaborate on a project? Have an idea you want to build? Looking to hire me? Get in touch below:</p>
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
            </div>
        </Element>
    );
};

export default Contact;
