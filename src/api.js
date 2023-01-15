import axios from 'axios';

export const getProblems = () => {
    return axios.get('http://localhost:3000/problems')
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const submitSolution = (problemNumber, user, answer, attempts) => {
    return axios.post('http://localhost:3000/solution', {
        problem_number: problemNumber,
        user: user,
        answer: answer,
        attempts: attempts
    })
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const getLeaderboard = (problemNumber) => {
    return axios.get(`http://localhost:3000/summary/${problemNumber}`)
        .then(res => res.data)
        .catch(err => console.log(err))
}
