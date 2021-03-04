// importing axios to be able to make api call
import axios from 'axios';

// making the api call and exporting it
export default {
    fetchUsers: function(query) {
        return axios
        .get('https://api.github.com/users/' + query)
    }
};