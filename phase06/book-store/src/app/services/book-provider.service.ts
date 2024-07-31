import {Injectable} from '@angular/core';
import {Book} from "../models/Book";

@Injectable({
  providedIn: 'root'
})
export class BookProviderService {

  protected books: Book[] = [
    {
      name: "The Night Circus",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Erin Morgenstern",
      publishData: "2011-09-13",
      price: 1599
    },
    {
      name: "The Road",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Dystopian"],
      author: "Cormac McCarthy",
      publishData: "2006-09-26",
      price: 1299
    },
    {
      name: "Life of Pi",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Adventure"],
      author: "Yann Martel",
      publishData: "2001-09-11",
      price: 1099
    },
    {
      name: "Little Fires Everywhere",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Drama"],
      author: "Celeste Ng",
      publishData: "2017-09-12",
      price: 1399
    },
    {
      name: "Big Little Lies",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Mystery"],
      author: "Liane Moriarty",
      publishData: "2014-07-29",
      price: 1199
    },
    {
      name: "The Night Watch",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Historical"],
      author: "Sarah Waters",
      publishData: "2006-02-02",
      price: 1499
    },
    {
      name: "The Goldfinch",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Mystery"],
      author: "Donna Tartt",
      publishData: "2013-09-23",
      price: 1799
    },
    {
      name: "Where the Crawdads Sing",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Mystery"],
      author: "Delia Owens",
      publishData: "2018-08-14",
      price: 1499
    },
    {
      name: "The Light We Lost",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Romance"],
      author: "Jill Santopolo",
      publishData: "2017-05-09",
      price: 1099
    },
    {
      name: "The Rosie Project",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Romance"],
      author: "Graeme Simsion",
      publishData: "2013-01-30",
      price: 999
    },
    {
      name: "Eleanor Oliphant Is Completely Fine",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Contemporary"],
      author: "Gail Honeyman",
      publishData: "2017-05-09",
      price: 1199
    },
    {
      name: "The Giver of Stars",
      image: "https://picsum.photos/200/300",
      genre: ["Contemporary", "Historical"],
      author: "Jojo Moyes",
      publishData: "2019-10-03",
      price: 1399
    },
    // Science Fiction
    {
      name: "Ender's Game",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Orson Scott Card",
      publishData: "1985-01-15",
      price: 1199
    },
    {
      name: "Neuromancer",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Mystery"],
      author: "William Gibson",
      publishData: "1984-07-01",
      price: 1099
    },
    {
      name: "Snow Crash",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Dystopian"],
      author: "Neal Stephenson",
      publishData: "1992-06-01",
      price: 999
    },
    {
      name: "Hyperion",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Epic"],
      author: "Dan Simmons",
      publishData: "1989-05-26",
      price: 1399
    },
    {
      name: "Foundation",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Classic"],
      author: "Isaac Asimov",
      publishData: "1951-05-01",
      price: 899
    },
    {
      name: "Top Gun",
      image: "https://picsum.photos/200/300",
      genre: ["Action", "Romance", "Military"],
      author: "Tony Scott",
      publishData: "1986-04-16",
      price: 1199
    },
    {
      name: "Top Gun Maverick",
      image: "https://picsum.photos/200/300",
      genre: ["Action", "Romance", "Military"],
      author: "Joseph Kosinski",
      publishData: "2002-04-27",
      price: 1199
    },
    {
      name: "The Amazing Spider-Man",
      image: "https://picsum.photos/200/300",
      genre: ["Adventure", "Action"],
      author: "Marc Webb",
      publishData: "2012-06-03",
      price: 1199
    },
    {
      name: "The Amazing Spider-Man 2",
      image: "https://picsum.photos/200/300",
      genre: ["Adventure", "Action"],
      author: "Marc Webb",
      publishData: "2014-04-02",
      price: 1199
    },
    {
      name: "Ready Player One",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Ernest Cline",
      publishData: "2011-08-16",
      price: 1299
    },
    {
      name: "The Expanse: Leviathan Wakes",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction"],
      author: "James S.A. Corey",
      publishData: "2011-06-15",
      price: 1399
    },
    {
      name: "Old Man's War",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Military"],
      author: "John Scalzi",
      publishData: "2005-01-15",
      price: 1099
    },
    {
      name: "The Left Hand of Darkness",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Classic"],
      author: "Ursula K. Le Guin",
      publishData: "1969-03-01",
      price: 999
    },
    {
      name: "The Three-Body Problem",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction"],
      author: "Liu Cixin",
      publishData: "2008-05-01",
      price: 1399
    },
    {
      name: "Station Eleven",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Dystopian"],
      author: "Emily St. John Mandel",
      publishData: "2014-09-09",
      price: 1499
    },
    // Fantasy
    {
      name: "The Name of the Wind",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Patrick Rothfuss",
      publishData: "2007-03-27",
      price: 1499
    },
    {
      name: "Mistborn: The Final Empire",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Epic"],
      author: "Brandon Sanderson",
      publishData: "2006-07-17",
      price: 1299
    },
    {
      name: "American Gods",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy"],
      author: "Neil Gaiman",
      publishData: "2001-06-19",
      price: 1199
    },
    {
      name: "The Way of Kings",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Epic"],
      author: "Brandon Sanderson",
      publishData: "2010-08-31",
      price: 1699
    },
    {
      name: "Good Omens",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Comedy"],
      author: "Neil Gaiman, Terry Pratchett",
      publishData: "1990-05-01",
      price: 1099
    },
    {
      name: "The Lies of Locke Lamora",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy"],
      author: "Scott Lynch",
      publishData: "2006-06-27",
      price: 1399
    },
    {
      name: "The Blade Itself",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy"],
      author: "Joe Abercrombie",
      publishData: "2006-05-04",
      price: 1299
    },
    {
      name: "The Priory of the Orange Tree",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Epic"],
      author: "Samantha Shannon",
      publishData: "2019-02-26",
      price: 1499
    },
    {
      name: "A Darker Shade of Magic",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "V.E. Schwab",
      publishData: "2015-02-24",
      price: 1299
    },
    {
      name: "The Poppy War",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Military"],
      author: "R.F. Kuang",
      publishData: "2018-05-01",
      price: 1399
    },
    {
      name: "The Bear and the Nightingale",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Historical"],
      author: "Katherine Arden",
      publishData: "2017-01-10",
      price: 1199
    },
    {
      name: "The Night Circus",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Romance"],
      author: "Erin Morgenstern",
      publishData: "2011-09-13",
      price: 1599
    },
    // Mystery
    {
      name: "Gone Girl",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Gillian Flynn",
      publishData: "2012-06-05",
      price: 1499
    },
    {
      name: "The Girl on the Train",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Paula Hawkins",
      publishData: "2015-01-13",
      price: 1299
    },
    {
      name: "The Silent Patient",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Alex Michaelides",
      publishData: "2019-02-05",
      price: 1399
    },
    {
      name: "Big Little Lies",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Fiction"],
      author: "Liane Moriarty",
      publishData: "2014-07-29",
      price: 1199
    },
    {
      name: "The Woman in the Window",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Thriller"],
      author: "A.J. Finn",
      publishData: "2018-01-02",
      price: 1399
    },
    {
      name: "Sharp Objects",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Gillian Flynn",
      publishData: "2006-09-26",
      price: 1199
    },
    {
      name: "In the Woods",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Crime"],
      author: "Tana French",
      publishData: "2007-05-17",
      price: 1399
    },
    {
      name: "The Cuckoo's Calling",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Crime"],
      author: "Robert Galbraith",
      publishData: "2013-04-30",
      price: 1299
    },
    {
      name: "Before I Go to Sleep",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Thriller"],
      author: "S.J. Watson",
      publishData: "2011-06-14",
      price: 1199
    },
    {
      name: "The Couple Next Door",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Shari Lapena",
      publishData: "2016-07-14",
      price: 1299
    },
    {
      name: "The Snowman",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Crime"],
      author: "Jo Nesbø",
      publishData: "2007-01-05",
      price: 1499
    },
    {
      name: "The Girl with the Dragon Tattoo",
      image: "https://picsum.photos/200/300",
      genre: ["Mystery", "Crime"],
      author: "Stieg Larsson",
      publishData: "2005-08-01",
      price: 1399
    },
    // Romance
    {
      name: "The Notebook",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Drama"],
      author: "Nicholas Sparks",
      publishData: "1996-10-01",
      price: 1099
    },
    {
      name: "Me Before You",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Drama"],
      author: "Jojo Moyes",
      publishData: "2012-01-05",
      price: 1299
    },
    {
      name: "Pride and Prejudice",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Classic"],
      author: "Jane Austen",
      publishData: "1813-01-28",
      price: 599
    },
    {
      name: "Outlander",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Historical"],
      author: "Diana Gabaldon",
      publishData: "1991-06-01",
      price: 1399
    },
    {
      name: "The Hating Game",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Comedy"],
      author: "Sally Thorne",
      publishData: "2016-08-09",
      price: 1199
    },
    {
      name: "The Time Traveler's Wife",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Science Fiction"],
      author: "Audrey Niffenegger",
      publishData: "2003-09-01",
      price: 1299
    },
    {
      name: "A Walk to Remember",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Drama"],
      author: "Nicholas Sparks",
      publishData: "1999-10-01",
      price: 1099
    },
    {
      name: "The Kiss Quotient",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Contemporary"],
      author: "Helen Hoang",
      publishData: "2018-06-05",
      price: 1199
    },
    {
      name: "Red, White & Royal Blue",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Comedy"],
      author: "Casey McQuiston",
      publishData: "2019-05-14",
      price: 1299
    },
    {
      name: "The Proposal",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Contemporary"],
      author: "Jasmine Guillory",
      publishData: "2018-10-30",
      price: 1199
    },
    {
      name: "Twilight",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Fantasy"],
      author: "Stephenie Meyer",
      publishData: "2005-10-05",
      price: 1399
    },
    {
      name: "Fifty Shades of Grey",
      image: "https://picsum.photos/200/300",
      genre: ["Romance"],
      author: "E.L. James",
      publishData: "2011-06-20",
      price: 1599
    },
    {
      name: "The Midnight Library",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Matt Haig",
      publishData: "2020-08-13",
      price: 1499
    },
    {
      name: "Dune",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Frank Herbert",
      publishData: "1965-08-01",
      price: 999
    },
    {
      name: "To Kill a Mockingbird",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "Harper Lee",
      publishData: "1960-07-11",
      price: 799
    },
    {
      name: "1984",
      image: "https://picsum.photos/200/300",
      genre: ["Dystopian", "Science Fiction"],
      author: "George Orwell",
      publishData: "1949-06-08",
      price: 899
    },
    {
      name: "The Great Gatsby",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "F. Scott Fitzgerald",
      publishData: "1925-04-10",
      price: 699
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy"],
      author: "J.K. Rowling",
      publishData: "1997-06-26",
      price: 1099
    },
    {
      name: "The Catcher in the Rye",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction"],
      author: "J.D. Salinger",
      publishData: "1951-07-16",
      price: 849
    },
    {
      name: "Pride and Prejudice",
      image: "https://picsum.photos/200/300",
      genre: ["Romance", "Classic"],
      author: "Jane Austen",
      publishData: "1813-01-28",
      price: 599
    },
    {
      name: "The Hobbit",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "J.R.R. Tolkien",
      publishData: "1937-09-21",
      price: 949
    },
    {
      name: "The Da Vinci Code",
      image: "https://picsum.photos/200/300",
      genre: ["Thriller", "Mystery"],
      author: "Dan Brown",
      publishData: "2003-03-18",
      price: 1299
    },
    {
      name: "The Alchemist",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction"],
      author: "Paulo Coelho",
      publishData: "1988-01-01",
      price: 1099
    },
    {
      name: "Brave New World",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Dystopian"],
      author: "Aldous Huxley",
      publishData: "1932-01-01",
      price: 899
    },
    {
      name: "The Hunger Games",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction"],
      author: "Suzanne Collins",
      publishData: "2008-09-14",
      price: 1199
    },
    {
      name: "The Shining",
      image: "https://picsum.photos/200/300",
      genre: ["Thriller"],
      author: "Stephen King",
      publishData: "1977-01-28",
      price: 1299
    },
    {
      name: "The Girl with the Dragon Tattoo",
      image: "https://picsum.photos/200/300",
      genre: ["Crime", "Mystery"],
      author: "Stieg Larsson",
      publishData: "2005-08-01",
      price: 1399
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Comedy"],
      author: "Douglas Adams",
      publishData: "1979-10-12",
      price: 999
    },
    {
      name: "The Kite Runner",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Historical"],
      author: "Khaled Hosseini",
      publishData: "2003-05-29",
      price: 1199
    },
    {
      name: "The Martian",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Andy Weir",
      publishData: "2011-09-27",
      price: 1299
    },
    {
      name: "The Handmaid's Tale",
      image: "https://picsum.photos/200/300",
      genre: ["Dystopian", "Fiction"],
      author: "Margaret Atwood",
      publishData: "1985-06-14",
      price: 1099
    },
    {
      name: "The Fault in Our Stars",
      image: "https://picsum.photos/200/300",
      genre: ["Romance"],
      author: "John Green",
      publishData: "2012-01-10",
      price: 999
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      image: "https://picsum.photos/200/300",
      genre: ["Non-fiction"],
      author: "Yuval Noah Harari",
      publishData: "2011-01-01",
      price: 1599
    },
    {
      name: "The Lord of the Rings",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Epic"],
      author: "J.R.R. Tolkien",
      publishData: "1954-07-29",
      price: 1799
    },
    {
      name: "Becoming",
      image: "https://picsum.photos/200/300",
      genre: ["Non-fiction"],
      author: "Michelle Obama",
      publishData: "2018-11-13",
      price: 1499
    },
    {
      name: "One Hundred Years of Solitude",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction"],
      author: "Gabriel García Márquez",
      publishData: "1967-05-30",
      price: 1099
    },
    {
      name: "The Silent Patient",
      image: "https://picsum.photos/200/300",
      genre: ["Thriller", "Mystery"],
      author: "Alex Michaelides",
      publishData: "2019-02-05",
      price: 1399
    },
    {
      name: "The Catcher in the Rye",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction"],
      author: "J.D. Salinger",
      publishData: "1951-07-16",
      price: 999
    },
    {
      name: "Educated",
      image: "https://picsum.photos/200/300",
      genre: ["Non-fiction"],
      author: "Tara Westover",
      publishData: "2018-02-20",
      price: 1299
    },
    {
      name: "The Pillars of the Earth",
      image: "https://picsum.photos/200/300",
      genre: ["Epic"],
      author: "Ken Follett",
      publishData: "1989-10-01",
      price: 1599
    },
    {
      name: "The Immortal Life of Henrietta Lacks",
      image: "https://picsum.photos/200/300",
      genre: ["Non-fiction"],
      author: "Rebecca Skloot",
      publishData: "2010-02-02",
      price: 1199
    },
    {
      name: "The name of the Wind",
      image: "https://picsum.photos/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Patrick Rothfuss",
      publishData: "2007-03-27",
      price: 1499
    }
  ];

  constructor() {
  }

  public loadBooks(): Book[] {
    return this.books;
  }

  public findBookByName(name: string) {
    return this.books.find(b => b.name.toLowerCase() === name);
  }
}
