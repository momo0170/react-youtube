import axios from 'axios';

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      parama: {
        key: process.env.REACT_APP_KEY,
      },
    });
  }
  async search() {}
}
