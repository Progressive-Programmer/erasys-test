import axios from 'axios';


export const ApiService = {
    searchUsers: (length) => {
        return axios.get(`/api/search?length=${length}`)
    },
    searchUserWithSorting: (length, sort) => {
        return axios.get(`/api/search?length=${length}&sorting=${sort}`) //sorting=DISTANCE|ACTIVITY
    },
    getProfilesById: (id) => {
        return axios.get(`/api/profiles?ids=${id}`) //profiles?ids=1111&ids=2222&...
    },
}