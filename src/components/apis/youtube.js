import axios from "axios";

const KEY = 'AIzaSyDNdTDJ5O13DjKNo_Gd1nAdmpDEv4lRPOE';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
