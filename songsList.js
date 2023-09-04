import { error } from 'console'
import { getAccessToken } from './index.js'
import { requestArtistData } from './request artist data.js';
import { getPlaylistData,getSongDetails } from './playlist data.js';


getAccessToken()
.then(async(accessToken) => {
    // console.log("Access token:", accessToken.access_token);
    return await accessToken.access_token
})
.catch((error) => {
    console.error('Error:', error);
});
const accessTokenDetails = await getAccessToken()
const accessToken = accessTokenDetails.access_token


// https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02?si=7jir2qy1S2SmIWumKPZcpw => copy artist link and paste the url after 'artist/'
const artistId = '06HL4z0CvFAxyc27GXpf02?si=cpm4AA-VTqaH3N1FsdrFoQ'; 
const apiUrl = `https://api.spotify.com/v1/artists/${artistId}`;
// requestArtistData(artistId,accessToken,apiUrl)

// https://open.spotify.com/playlist/4td9IELhfFrSsDSYjbZhaQ?si=93396de5c4244845 => copy the playlist link and paste the url after 'playlist/'
const playlistId = '4td9IELhfFrSsDSYjbZhaQ?si=8748bf886f3f4031'
const apiURL = `https://api.spotify.com/v1/playlists/${playlistId}`
const playlistDetails = await getPlaylistData(playlistId,accessToken,apiURL)
// console.log(playlistDetails)

const songDetails = getSongDetails(playlistDetails)
// console.log(songDetails)

export {songDetails}