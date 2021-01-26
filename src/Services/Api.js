import axios from "axios";

export const API = axios.create({
    baseURL : 'https://opentdb.com/api.php/',
    timeout : 5000,
    responseType : 'json',
});

export function getTriviaQuestions( { amount = '10', difficulty = 'easy' } ) {
    return API.get('', { params : { amount, difficulty, type : 'boolean' } }).then(r => {
        return r.data;
    })
}
