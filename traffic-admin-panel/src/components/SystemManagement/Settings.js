import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
    const [settings, setSettings] = useState({
        videoProcessingParams: '',
        mlModelUpdates: '',
        integrationSettings: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    const handleSave = () => {
        axios.post('/api/settings', settings)
            .then(response => {
                alert('Settings saved successfully');
            })
            .catch(error => {
                console.error('There was an error saving the settings!', error);
            });
    };

    return (
        <div className="settings">
            <h2>System Settings</h2>
            <form>
                <label>
                    Video Processing Parameters:
                    <input
                        type="text"
                        name="videoProcessingParams"
                        value={settings.videoProcessingParams}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    ML Model Updates:
                    <input
                        type="text"
                        name="mlModelUpdates"
                        value={settings.mlModelUpdates}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Integration Settings:
                    <input
                        type="text"
                        name="integrationSettings"
                        value={settings.integrationSettings}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Settings;
