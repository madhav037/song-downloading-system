import fetch from "node-fetch"


export default function youtubeSearch(searchQuery) {
    const youtubeAPI = 'AIzaSyCg_vthHxhhJ2UzsIzNJtM03AdXYYkQGjQ'
    // const searchQuery = 'Sparkle - movie ver.'

    const apiURL = 'https://www.googleapis.com/youtube/v3/search'
    const queryParams = new URLSearchParams({
        key : youtubeAPI,
        q : searchQuery,
        part : 'snippet',
        type : 'video' 
    })

    const url = `${apiURL}?${queryParams.toString()}`

    return fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error('response not ok')
        }
        return res.json()
    })
    .then(data => {
        const videos = data.items[0]
        // videos.forEach(videos => {
            // console.log(element.snippet)
            // });
            // console.log(videos)
            // console.log(`video is : https://www.youtube.com/watch?v=${videos.id.videoId}`)
            return `https://www.youtube.com/watch?v=${videos.id.videoId}`
    })
    .catch(error => {
        console.error("Error is : ", error)
    })
}