function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const URL = "https://anapioficeandfire.com/api/books";
	return fetch(URL)
		.then((response) => response.json())
		.then((data) => renderBooks(data))
		.catch((error) =>
			console.error("Error fetching books:", error)
		);
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  renderBooks(books)
});
