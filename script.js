// Function to fetch data from the API using Promises
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Function to display data on the webpage
function displayData(data) {
    const container = document.getElementById('apiDataContainer');
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
        container.appendChild(card);
    });
}

// API endpoints
const apiUrls = [
    'https://api.example.com/endpoint1',
    'https://api.example.com/endpoint2',
    'https://api.example.com/endpoint3'
];

// Fetch data from APIs and display on the webpage
apiUrls.forEach(url => {
    fetchData(url)
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
