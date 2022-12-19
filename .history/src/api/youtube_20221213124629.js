import axios from 'axios';

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3', // 기본 경로
      parama: {
        key: process.env.REACT_APP_KEY, // youtube api key
      },
    });
  }
  async search() {
    return this.httpClient.get('search', params);
  }
  async videos() {
    return this.httpClient.get('videos', params);
  }
  async channel() {
    return this.httpClient.get('channels', params);
  }
}
