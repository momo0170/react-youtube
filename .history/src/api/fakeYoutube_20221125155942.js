import axios from 'axios';

export default class FakeYoutube {
  constructor() {

  }
  async function search(keyword) {
    return axios
      .get(`/data/${keyword ? 'search' : 'mostpopular'}.json`)
      .then((res) => res.data.items);
  }
  

}