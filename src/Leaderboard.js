import React, { useState, useEffect } from 'react';
import { getLeaderboard } from './api';

function Leaderboard({ problemNumber }) {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        getLeaderboard(problemNumber).then(data => setLeaderboard(data));
    }, [problemNumber]);

    return (
        <div>
            <h2>Leaderboard for Problem {problemNumber}</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Earliest Time</th>
                        <th>Number of Attempts</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.earliest_time}</td>
                            <td>{item.attempts}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
