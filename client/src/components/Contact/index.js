import React, { useState } from 'react';
import axios from 'axios';
import { Element } from 'react-scroll';
import './styles.css';
import Modal from './Modal';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalStatus, setModalStatus] = useState('success');  // success or failure

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            name: formData.name,
            email: formData.email,
            body: formData.message
        };

        try {
            const response = await axios.post('/api/contact', dataToSend);
            if (response.data.message === 'Email sent!') {
                setModalMessage('Email sent successfully!');
                setModalStatus('success');
                setShowModal(true);
            } else {
                setModalMessage('Error sending email. Please try again later.');
                setModalStatus('failure');
                setShowModal(true);
            }
        } catch (error) {
            setModalMessage('Error sending email. Please try again later.');
            setModalStatus('failure');
            setShowModal(true);
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
                </div>
            </div>

            {/* Modal to display feedback messages */}
            <Modal show={showModal} onClose={() => setShowModal(false)} isError={modalMessage.includes('Error')}>
            <p>{modalMessage}</p>
            </Modal>
        </Element>
    );
};

export default Contact;
