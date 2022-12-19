import axios from 'axios';

export default class FakeYoutube {
  async search(keyword) {
    return axios.get('/data/search.json').then((res) => res.data.items);
  }

  async videis(id) {
    return axios
      .get('/data/videoInformatino.json')
      .then((res) => res.data.items);
  }
}
