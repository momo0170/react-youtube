import axios from 'axios';

export async function search(keyword) {
  return axios
    .get(`/data/${keyword ? 'search' : 'mostpopular'}.json`)
    .then((res) => res.data.items);
}
