import fetch from "node-fetch";

function requestArtistData(artistId,accessToken,apiURL) {
    fetch(apiURL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Artist Details:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}

export {requestArtistData}