const request = options => {
  return fetch(options)
    .then((response) => {
        return response.json();
    })       
    .then((data) => {
        return data;
    })
    .catch(error => console.error(error));
};

const makeRequest = request('https://jsonplaceholder.typicode.com/posts/1');
console.log(makeRequest);
