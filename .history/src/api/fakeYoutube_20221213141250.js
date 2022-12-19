import axios from 'axios';

export default class FakeYoutube {
  async search(keyword) {
    axios.get('/data/search.json');
  }
}
