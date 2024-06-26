import React, { useState } from 'react';
import axios from 'axios';

const NotificationSettings = () => {
    const [settings, setSettings] = useState({
        email: true,
        sms: false,
        inApp: true,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: checked,
        }));
    };

    const handleSave = () => {
        axios.post('/api/alerts/settings', settings)
            .then(response => {
                alert('Settings saved successfully');
            })
            .catch(error => {
                console.error('There was an error saving the settings!', error);
            });
    };

    return (
        <div className="notification-settings">
            <h2>Notification Settings</h2>
            <form>
                <label>
                    <input
                        type="checkbox"
                        name="email"
                        checked={settings.email}
                        onChange={handleChange}
                    />
                    Email
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="sms"
                        checked={settings.sms}
                        onChange={handleChange}
                    />
                    SMS
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="inApp"
                        checked={settings.inApp}
                        onChange={handleChange}
                    />
                    In-app
                </label>
            </form>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default NotificationSettings;
