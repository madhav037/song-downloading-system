import ytdl from "ytdl-core";
import fs from "fs"
import { songDetails } from "./songsList.js";
import youtubeSearch from "./youtubeapi.js";

console.log(songDetails)
async function getUrls() {
    const urlPromises = songDetails.map(async (songName) => {
      return await youtubeSearch(songName.songName);
    });
    
    const urls = await Promise.all(urlPromises);
    return urls;
}
const url_Arrays = await getUrls()
// console.log(url_Arrays)


const options = {
  quality: 'highestaudio',
  filter: 'audioonly',
  format: 'mp3',
};

const songs = songDetails.map(song => {
    return song.songName.replace(/[ ()-]/g, '_')
})
// console.log(songs)


url_Arrays.forEach((url, index) => {
    const stream = ytdl(url, options);
    const filePath = `D:/Songs/${songs[index]}.mp3`;
    
    const outputStream = fs.createWriteStream(filePath);
    
    stream.pipe(outputStream);
    
    stream.on('progress', (chunkLength, downloaded, total) => {
      console.log(`Downloaded ${downloaded} bytes of ${total} bytes`);
    });
    
    outputStream.on('finish', () => {
      console.log('Download completed.');
    });
})
