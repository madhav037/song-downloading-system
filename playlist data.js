import { error } from "console";
import fetch from "node-fetch";

function getPlaylistData(playlistId,accessToken,apiURL) {
    return fetch(apiURL,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Error : '+ res.status)
        }
        return res.json()
    })
    .then(async data => {
        // console.log(data.tracks.items)
        return await data.tracks.items
    })
    .catch(error => {
        console.error('error is :' + error)
    })
}

function getSongDetails(playlistDetails) {
    const songNames = playlistDetails.map((tracks) => tracks.track.name);
    const artists = playlistDetails.map(artists => {return artists.track.artists})
    const artistsNames = artists.map((innerArray) => innerArray.map(artist => artist.name));
    const songDetails = songNames.map((songName, index) => ({
        songName,
        artists: artistsNames[index],
    }));
    return songDetails;
}

export {getPlaylistData, getSongDetails}