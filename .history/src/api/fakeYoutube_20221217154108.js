import axios from 'axios';

export default class FakeYoutube {
  async search(keyword) {
    return axios
      .get('/data/search.json')
      .then((res) =>
        es.data.items.map((item) => ({ ...item, id: item.id.videiId }))
      );
  }

  async videos() {
    return axios
      .get('/data/videoInformatino.json')
      .then((res) => res.data.items);
  }

  async relative() {
    return axios
      .get('/data/videoInformatino.json')
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videiId }))
      );
  }
}
