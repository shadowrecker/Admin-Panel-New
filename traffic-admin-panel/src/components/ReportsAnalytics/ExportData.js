import React from 'react';
import axios from 'axios';

const ExportData = () => {
    const handleExport = (format) => {
        axios.get(`/processor/export?format=${format}`, { responseType: 'blob' })
            .then(response => {
                const blob = new Blob([response.data], { type: response.headers['content-type'] });
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = `report.${format}`;
                link.click();
            })
            .catch(error => {
                console.error('There was an error exporting the data!', error);
            });
    };

    return (
        <div className="export-data">
            <h2>Export Data</h2>
            <button onClick={() => handleExport('csv')}>Export as CSV</button>
            <button onClick={() => handleExport('pdf')}>Export as PDF</button>
        </div>
    );
};

export default ExportData;

