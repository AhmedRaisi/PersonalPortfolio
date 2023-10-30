import React from 'react';
import './Modal.css'; 

const Modal = ({ show, onClose, children, isError }) => {
    if (!show) return null;

    const modalClass = isError ? 'modal-error' : '';
    const buttonClass = isError ? 'modal-error-btn' : '';

    return (
        <div className="modal-overlay">
            <div className={`modal-content ${modalClass}`}>
                <button onClick={onClose} className={`close-button ${buttonClass}`}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
