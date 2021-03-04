import React, { useState } from 'react';
// importinng components
import Card from '../components/Card';
import Alert from '../components/Alert';
// importing axios to be able to make api call
import axios from 'axios';

function Main() {
    // Creating the state and setState function to search
    const [getSearch, setSearch] = useState('');
    // Creating the state and setState function for errors
    const [getError, setError] = useState('');
    // Storing the response from the api call in states and creating a function to set the state
    const [getName, setName] = useState('');
    const [getLocation, setLocation] = useState('');
    const [getImg, setImg] = useState('');
    // Setting the useState values to 0 because the api response will be a number
    const [getFollowers, setFollowers] = useState(0);
    const [getRepos, setRepos] = useState(0);
    const [getFollowing, setFollowing] = useState(0);

    // Function to grab what has been entered into the searchbar and set the state called search
    const handleChange = event => {
        setSearch(event.target.value);
    };

    // Function to make the api call
    const handleSubmit = (event) => {
    // Adding the preventDefault method so that the api call is made when the form has been submitted
    event.preventDefault();    
    axios.get(`https://api.github.com/users/${getSearch}`)
        .then(res => {
            console.log(res)
            if (res.data.message === 'Not Found') {
                setError(res.data.message)
            }
            setName(res.data.name)
            setLocation(res.data.location)
            setFollowers(res.data.followers)
            setRepos(res.data.public_repos)
            setFollowing(res.data.following)
            setImg(res.data.avatar_url)
        })
        .catch(err => setError(err));
    };


    return (
        <div>
            {/* If there is an error from the api call */}
            <Alert type="danger" style={{ opacity: getError ? 1 : 0, marginBottom: 10 }}>
            </Alert>    
            <Card
            // passing the handleChange function and the value stored in the search state to Card.js
            onSubmit={handleSubmit}
            onChange={handleChange}
            value={getSearch}
            getName={getName}
            getImg={getImg}
            getLocation={getLocation}
            getFollowers={getFollowers}
            getRepos={getRepos}
            getFollowing={getFollowing}
            />
        </div>
    )
};

export default Main;