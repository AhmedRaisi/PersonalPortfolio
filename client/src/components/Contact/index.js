import React, { useState } from 'react';
import axios from 'axios';  // Import Axios for HTTP requests
import { Element } from 'react-scroll';
import './styles.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data for sending
        const dataToSend = {
            name: formData.name,
            email: formData.email,
            body: formData.message // This is where the change was made
        };

        try {
            const response = await axios.post('/api/contact', dataToSend);
            if (response.data.message === 'Email sent!') {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        }
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

                    {submissionStatus === 'success' && <p>Email sent successfully!</p>}
                    {submissionStatus === 'error' && <p>Error sending email. Please try again later.</p>}
                </div>
            </div>
        </Element>
    );
};

export default Contact;
