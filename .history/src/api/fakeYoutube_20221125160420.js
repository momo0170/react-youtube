import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    // #을 붙이면 private 함수(클래스 내무적으로 호출가능, 외부에서 호출 불가능)
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`/data/search.json`)
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
