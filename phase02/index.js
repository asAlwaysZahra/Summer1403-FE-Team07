let books = [];

function fetchData() {
    return fetch("https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            books = data;
            console.log("Books inside fetchData:", books); // This will log the array of JSON objects
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Fetch data and assign to `books`
fetchData().then(() => {
    const booksContainer = document.querySelector('article');

    for (const book of books) {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <h3>${book.name}</h3>
            <p>
                Genre: ${book.genre.join(', ')}
                <br/>
                Author: ${book.author}
                <br/>
                Publish Date: ${book.publishData}
                <br/>
                Price: ${book.price}$
            </p>
            <img src="${book.image}" alt="${book.name}" />
        `;
        booksContainer.appendChild(bookElement);
    }
});
