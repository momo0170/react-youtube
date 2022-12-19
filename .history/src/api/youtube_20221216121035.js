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
    return keyword
      ? this.httpClient
          .get('search', {
            params: {
              q: keyword,
              type: 'video',
              maxResults: 30,
              part: 'snippet',
            },
          })
          .then((res) =>
            res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
          )
      : this.httpClient
          .get('videos', {
            params: {
              maxResults: 30,
              part: 'snippet',
              chart: 'mostPopular',
            },
          })
          .then((res) => res.data.items);
  }
  async videos(id) {
    return this.httpClient
      .get('videos', {
        params: {
          id: id, // videoId
          part: 'snippet,statistics', // statistic(조회수, 댓글수, 좋아요 수), snippet(videoId, channelId)
        },
      })
      .then((res) => res.data.items[0]);
  }
  async channel(id) {
    return this.httpClient
      .get('channels', {
        params: {
          id: id,
          part: 'snippet,statistics', // statistic(구독자 수), snippet(채널 ID, 채널 썸네일)
        },
      })
      .then((res) => res.data.items[0]);
  }

  async relative(id) {
    return keyword
      ? this.httpClient
          .get('search', {
            params: {
              relativeToVideoId: id,
              type: 'video',
              maxResults: 30,
              part: 'snippet',
            },
          })
          .then((res) =>
            res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
          );
        
}
