import React, { useEffect, useState } from 'react';
// importing the api call
import API from '../utils/API';
import Card from '../components/Card';

function Main() {
    // Creating the state and setState function to search
    // Setting the default value to my github profile
    const [getSearch, setSearch] = useState('HustinKava');
    // Creating the state and setState function for errors
    const [getError, setError] = useState('');
    // Storing the response from the api call in states and creating a function to set the state
    const [getName, setName] = useState('');
    const [getLocation, setLocation] = useState('');
    const [getFollowers, setFollowers] = useState('');
    const [getRepos, setRepos] = useState('');
    const [getFollowing, setFollowing] = useState('');
    
    // When the page loads, we it to automatically display results for HustinKava 
    useEffect(() => {

        API.fetchUsers(getSearch)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error('No results found.');
                } if (res.data.status === 'error') {
                    throw new Error(res.data.message)
                }
                setName(res.name)
            })
            .catch(err => setError(err));
    });

    // Function to grab what has been entered into the searchbar and set the state called search
    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    return (
        <div>
            {/* If there is an error from the api call */}
            <Alert type="danger" style={{ opacity: getError ? 1 : 0, marginBottom: 10 }}/>
            <Card
            // passing the handleInputChange function and the value stored in the search state to Card.js
            handleInputChange={handleInputChange}
            results={getSearch}
            name={getName}
            />
        </div>
    )
};

export default Main;