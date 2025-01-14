type Theme = "dark" | "light";

interface Book {
    name: string;
    genre: string[];
    image: string;
    author: string;
    publishData: string;
    price: number;
}
async function fetchData() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json");
        return await response.json();

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function displayBooks() {
    const books: Book[] = await fetchData();

    if (!books) {
        return;
    }

    const booksContainer: HTMLElement = document.querySelector('article') as HTMLElement;

    for (const book of books) {
        const bookElement = document.createElement('div');
        bookElement.setAttribute('class', 'book-card');
        bookElement.innerHTML = `
            <div class="description">
                <h3>${book.name}</h3>
                <p>
                    <span><span class="title">Genre</span>${book.genre.join(', ')}</span>
                    <span><span class="title">Author</span>${book.author}</span>
                    <span><span class="title">Publish Date</span>${book.publishData}</span>
                    <span><span class="title">Price</span>${book.price}$</span>
                </p>
            </div>
            <img src="${book.image}" alt="${book.name}" />
        `;
        booksContainer.appendChild(bookElement);
    }
}

displayBooks().then(() => {
    return;
});

function calculateSettingAsThemeString(localStorageTheme: string, systemSettingDark: MediaQueryList): Theme {
    if (localStorageTheme === null) {
        if (systemSettingDark.matches) {
            return "dark";
        }
        return "light";
    } else {
        return <"dark" | "light">localStorageTheme;
    }
}

function updateButton(isDark: boolean) {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    sun!.style.display = isDark ? "block" : "none";
    moon!.style.display = isDark ? "none" : "block";
}

function updateThemeOnHtmlEl(theme: Theme) {
    document.querySelector("html")!.setAttribute("data-theme", theme);
}

function setInitiativeTheme() {
    const button: HTMLElement = document.querySelector("[data-theme-toggle]") as HTMLElement;
    const localStorageTheme: string = localStorage.getItem("theme") as string;
    const systemSettingDark: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    let currentThemeSetting: Theme = calculateSettingAsThemeString(localStorageTheme, systemSettingDark);

    updateButton(currentThemeSetting === "dark");
    updateThemeOnHtmlEl(currentThemeSetting);

    button.addEventListener("click", () => {
        const newTheme: Theme = currentThemeSetting === "dark" ? "light" : "dark";

        localStorage.setItem("theme", newTheme);
        updateButton(newTheme === "dark");
        updateThemeOnHtmlEl(newTheme);

        currentThemeSetting = newTheme;
    });
}

setInitiativeTheme();

