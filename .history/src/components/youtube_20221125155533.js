export async function search(keyword) => {
  return axios
    .get(`/data/${params ? 'search' : 'mostpopular'}.json`)
    .then((res) => res.data.items);
}