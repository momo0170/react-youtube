import axios from 'axios';

export default class FakeYoutube {
  async search() {
    return axios.get('/data/search.json');
  }
}
