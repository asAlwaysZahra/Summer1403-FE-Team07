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
        bookElement.setAttribute('class', 'book-card');
        bookElement.innerHTML = `
            <div class="description">
                <h3>${book.name}</h3>
                <p>
                    <span><span class="title" >Genre</span>${book.genre.join(', ')}</span>
                    <span><span class="title" >Author</span>${book.author}</span>
                    <span><span class="title" >Publish Date</span>${book.publishData}</span>
                    <span><span class="title" >Price</span>${book.price}$</span>
                </p>
            </div>
            <img src="${book.image}" alt="${book.name}" />
        `;
        booksContainer.appendChild(bookElement);
    }
});

// Add dark light theme change

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

function updateButton({ buttonEl, isDark }) {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    if (isDark) {
        sun.style.display = "block";
        moon.style.display = "none";
    }
    else {
        moon.style.display = "block";
        sun.style.display = "none";
    }
}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });

    currentThemeSetting = newTheme;
});
