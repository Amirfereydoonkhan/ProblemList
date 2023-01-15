import React, { useState } from 'react';
import { submitSolution } from './api';

function SubmitSolutionForm() {
    const [problemNumber, setProblemNumber] = useState('');
    const [user, setUser] = useState('');
    const [answer, setAnswer] = useState('');
    const [attempts, setAttempts] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        submitSolution(problemNumber, user, answer, attempts);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Problem Number:
                <input type="text" value={problemNumber} onChange={event => setProblemNumber(event.target.value)} />
            </label>
            <br />
            <label>
                User:
                <input type="text" value={user} onChange={event => setUser(event.target.value)} />
            </label>
            <br />
            <label>
                Answer:
                <input type="text" value={answer} onChange={event => setAnswer(event.target.value)} />
            </label>
            <br />
            <label>
                Attempts:
                <input type="text" value={attempts} onChange={event => setAttempts(event.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubmitSolutionForm;
