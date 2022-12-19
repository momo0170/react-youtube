import axios from 'axios';

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3', // 기본 경로
      params: {
        key: process.env.REACT_APP_KEY, // youtube api key
      },
    });
  }
  async search(keyword) {
    return this.httpClient
      .get('search', {
        params: {
          q: keyword,
          type: 'video',
          maxResults: 30,
          part: 'snippet',
        },
      })
      .then((res) => res.data.items);
  }
  async videos(id) {
    return this.httpClient
      .get('videos', {
        params: {
          id: id,
          part: 'snippet,statistics',
        },
      })
      .then((res) => res.data.items);
  }
  async channel(id) {
    return this.httpClient.get('channels', {
      params: {
        id: id,
        part: 'snippet,statistics',
      },
    });
  }
}
