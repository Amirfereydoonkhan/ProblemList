import React, { useState, useEffect } from 'react';
import { getProblems } from './api';

function Problems() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        getProblems().then(data => setProblems(data));
    }, []);

    return (
        <div>
            {problems.map(problem => (
                <div key={problem.problem_number}>
                    <p>Problem {problem.problem_number}: {problem.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Problems;
