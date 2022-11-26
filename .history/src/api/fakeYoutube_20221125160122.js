import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    // #을 붙이면 private 함수(클래스 내무적으로 호출가능, 외부에서 호출 불가능)
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    return axios
      .get(`/data/${keyword ? 'search' : 'mostpopular'}.json`)
      .then((res) => res.data.items);
  }
}
