
import React, { useState, useEffect } from 'react';

function Statistics() {
    const [stats, setStats] = useState({});

    const fetchStats = () => {
        fetch("/api/stats")
            .then(response => response.json())
            .then(data => setStats(data));
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Total Contacts: {stats.totalContacts}</li>
                <li>Total Phone Numbers: {stats.totalPhones}</li>
                <li>Latest Contact Created At: {stats.latestContactTime}</li>
                <li>Oldest Contact Created At: {stats.oldestContactTime}</li>
            </ul>
            <button onClick={fetchStats}>Refresh</button>
        </div>
    );
}

export default Statistics;
￼Enter
