import axios from 'axios';

/** Base url to make requests to the movie database */
const instance = axios.create({
    baseUrl = 'https://api.themoviedb.org/3'
})

export default instance;