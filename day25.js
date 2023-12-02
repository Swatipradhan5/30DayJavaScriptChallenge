
function fetchData(url) {
   return fetch(url)
  .then(response => response.json())
  .catch(error => console.error('Error fetching data:', error));
}

function getData() {
const api1 = 'https://jsonplaceholder.typicode.com/todos/1'; 
const api2 = 'https://jsonplaceholder.typicode.com/todos/5';
  return fetchData(api1) 
  .then(result1=> {
      return fetchData(api2) 
      .then(result2 => {
        return { datal: result1, data2: result2 };
        });
    });
 
}
getData().then(combinedData => {
console.log(combinedData);
});