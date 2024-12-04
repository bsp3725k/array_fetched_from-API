// Function to create table rows for displaying data
function displayData(apiName, data) {
    const tableBody = document.getElementById('dataTableBody');
    const row = document.createElement('tr');
    const apiNameCell = document.createElement('td');
    const dataCell = document.createElement('td');
  
    apiNameCell.textContent = apiName;
    dataCell.textContent = JSON.stringify(data, null, 2);
  
    row.appendChild(apiNameCell);
    row.appendChild(dataCell);
    tableBody.appendChild(row);
  }
  
  // Function to simulate API requests with delay
  function promiseAPI1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/posts')
          .then((response) => response.json())
          .then((data) => {
            displayData('Posts API', data.posts); // Display posts
            resolve(true); // Resolve the promise
          });
      }, 1000); // Simulated delay of 1000ms
    });
  }
  
  function promiseAPI2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/products')
          .then((response) => response.json())
          .then((data) => {
            displayData('Products API', data.products); // Display products
            resolve(true); // Resolve the promise
          });
      }, 2000); // Simulated delay of 2000ms
    });
  }
  
  function promiseAPI3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/todos')
          .then((response) => response.json())
          .then((data) => {
            displayData('Todos API', data.todos); // Display todos
            resolve(true); // Resolve the promise
          });
      }, 3000); // Simulated delay of 3000ms
    });
  }
  
  // Promise chaining with .then()
  document.getElementById('fetchDataButton').addEventListener('click', () => {
    promiseAPI1()
      .then((resolved) => {
        if (resolved) return promiseAPI2();
      })
      .then((resolved) => {
        if (resolved) return promiseAPI3();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });
  