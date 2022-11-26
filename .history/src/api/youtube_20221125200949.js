import axios from 'axios';

import axios from 'axios';
import { AiFillSnippets } from 'react-icons/ai';

export default class Youtube {
  constructor() {
    // axios 통신을 할 때 필요한 기본적인 세팅
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_KEY },
    });
  }

  async search(keyword) {
    // #을 붙이면 private 함수(클래스 내무적으로 호출가능, 외부에서 호출 불가능)
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get(`search`, {
        params: {
          part: 'snippet',
          maxResult: 30,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return axios
      .get(`/data/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}
