import fetch from "node-fetch";

function getAccessToken() {
    const spotifyTokenUrl = 'https://accounts.spotify.com/api/token'
    const clientId = '129dd6b685564f2fae1d84e577d67197';
    const clientSecret = '6633591db5e443979d86384f380d348a';

    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);

    return fetch(spotifyTokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    })
    .then(async (response) => await response.json())
    .then(async (data) => {
        // console.log('Access Token:', data);
        return data; // Return the data
    })
    .catch((error) => {
        console.error('Error:', error);
        throw error; // Throw the error to propagate it
    });
}

export {getAccessToken}