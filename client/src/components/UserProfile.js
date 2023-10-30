import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>Error loading user data. Please try again.</div>;
    }

    return (
        <div>
            {/* <h2>{userData.name}'s Profile</h2>
            <p>Email: {userData.email}</p>
            Add other user data fields here */}
        </div>
    );
}

export default UserProfile;
