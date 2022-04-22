import axios from axios;

const KEY = 'AIzaSyDQusyVa0fCd58MW41mqSK9r1-x5ua4XME';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});