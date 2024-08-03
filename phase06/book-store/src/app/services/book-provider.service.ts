import {Injectable} from '@angular/core';
import {Book} from "../models/Book";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {searchType} from "../models/SearchType";

@Injectable({
  providedIn: 'root'
})

export class BookProviderService {

  protected books: Book[] = [
    {
      name: "The Haunted Mansion",
      image: "https://picsum.photos/id/322/200/300",
      genre: ["Horror"],
      author: "Stephen King",
      publishData: "2019-10-31",
      price: 1800,
    },
    {
      name: "Nightmare in the Woods",
      image: "https://picsum.photos/id/323/200/300",
      genre: ["Horror"],
      author: "H.P. Lovecraft",
      publishData: "2018-09-21",
      price: 1900,
    },
    {
      name: "The Cursed Doll",
      image: "https://picsum.photos/id/324/200/300",
      genre: ["Horror"],
      author: "Mary Shelley",
      publishData: "2017-08-15",
      price: 1750,
    },
    {
      name: "House of Horrors",
      image: "https://picsum.photos/id/325/200/300",
      genre: ["Horror"],
      author: "Edgar Allan Poe",
      publishData: "2016-07-05",
      price: 1600,
    },
    {
      name: "The Dark Abyss",
      image: "https://picsum.photos/id/326/200/300",
      genre: ["Horror"],
      author: "Clive Barker",
      publishData: "2015-06-30",
      price: 1850,
    },
    {
      name: "Echoes of the Dead",
      image: "https://picsum.photos/id/327/200/300",
      genre: ["Horror"],
      author: "Bram Stoker",
      publishData: "2014-05-25",
      price: 1700,
    },
    {
      name: "The Forgotten Crypt",
      image: "https://picsum.photos/id/328/200/300",
      genre: ["Horror"],
      author: "Anne Rice",
      publishData: "2013-04-14",
      price: 1550,
    },
    {
      name: "The Phantom's Curse",
      image: "https://picsum.photos/id/329/200/300",
      genre: ["Horror"],
      author: "Richard Matheson",
      publishData: "2012-03-11",
      price: 1650,
    },
    {
      name: "Shadows of Fear",
      image: "https://picsum.photos/id/330/200/300",
      genre: ["Horror"],
      author: "Peter Straub",
      publishData: "2011-02-20",
      price: 1750,
    },
    {
      name: "The Creeping Darkness",
      image: "https://picsum.photos/id/331/200/300",
      genre: ["Horror"],
      author: "Shirley Jackson",
      publishData: "2010-01-15",
      price: 1500,
    },
    {
      name: "The Silent Witness",
      image: "https://picsum.photos/id/232/200/300",
      genre: ["Thriller"],
      author: "John Grisham",
      publishData: "2021-12-01",
      price: 2000,
    },
    {
      name: "Edge of Darkness",
      image: "https://picsum.photos/id/233/200/300",
      genre: ["Thriller"],
      author: "Dan Brown",
      publishData: "2020-11-15",
      price: 2100,
    },
    {
      name: "The Final Hour",
      image: "https://picsum.photos/id/334/200/300",
      genre: ["Thriller"],
      author: "Lee Child",
      publishData: "2019-10-10",
      price: 2200,
    },
    {
      name: "Under the Shadows",
      image: "https://picsum.photos/id/335/200/300",
      genre: ["Thriller"],
      author: "James Patterson",
      publishData: "2018-09-05",
      price: 2300,
    },
    {
      name: "The Reckoning",
      image: "https://picsum.photos/id/336/200/300",
      genre: ["Thriller"],
      author: "David Baldacci",
      publishData: "2017-08-25",
      price: 2400,
    },
    {
      name: "Crossfire",
      image: "https://picsum.photos/id/337/200/300",
      genre: ["Thriller"],
      author: "Patricia Cornwell",
      publishData: "2016-07-20",
      price: 2500,
    },
    {
      name: "The Assassin's Game",
      image: "https://picsum.photos/id/338/200/300",
      genre: ["Thriller"],
      author: "Tom Clancy",
      publishData: "2015-06-15",
      price: 2600,
    },
    {
      name: "The Dark Web",
      image: "https://picsum.photos/id/339/200/300",
      genre: ["Thriller"],
      author: "Michael Connelly",
      publishData: "2014-05-10",
      price: 2700,
    },
    {
      name: "Deadly Secrets",
      image: "https://picsum.photos/id/340/200/300",
      genre: ["Thriller"],
      author: "Karin Slaughter",
      publishData: "2013-04-05",
      price: 2800,
    },
    {
      name: "Chasing Shadows",
      image: "https://picsum.photos/id/341/200/300",
      genre: ["Thriller"],
      author: "Robert Ludlum",
      publishData: "2012-03-01",
      price: 2900,
    },
    {
      name: "The Great Adventure",
      image: "https://picsum.photos/id/302/200/300",
      genre: ["Fiction", "Adventure"],
      author: "Alexander Hamilton",
      publishData: "2021-08-21",
      price: 1500,
    },
    {
      name: "Mystery of the Old House",
      image: "https://picsum.photos/id/203/200/300",
      genre: ["Fiction", "Mystery"],
      author: "Eleanor Roosevelt",
      publishData: "2019-05-18",
      price: 1200,
    },
    {
      name: "Love in the Time of Chaos",
      image: "https://picsum.photos/id/304/200/300",
      genre: ["Fiction", "Romance"],
      author: "Charles Darwin",
      publishData: "2018-02-14",
      price: 1300,
    },
    {
      name: "Journey to the Unknown",
      image: "https://picsum.photos/id/305/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Marie Curie",
      publishData: "2020-07-10",
      price: 1400,
    },
    {
      name: "The Last Frontier",
      image: "https://picsum.photos/id/306/200/300",
      genre: ["Fiction", "Historical"],
      author: "Isaac Newton",
      publishData: "2017-11-20",
      price: 1600,
    },
    {
      name: "Tales of the Forgotten",
      image: "https://picsum.photos/id/307/200/300",
      genre: ["Fiction", "Mystery"],
      author: "Ada Lovelace",
      publishData: "2016-09-25",
      price: 1100,
    },
    {
      name: "Whispers in the Wind",
      image: "https://picsum.photos/id/308/200/300",
      genre: ["Fiction", "Romance"],
      author: "Thomas Jefferson",
      publishData: "2015-04-12",
      price: 1700,
    },
    {
      name: "Echoes of Eternity",
      image: "https://picsum.photos/id/309/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Susan B. Anthony",
      publishData: "2022-01-15",
      price: 1250,
    },
    {
      name: "Secrets of the Ancients",
      image: "https://picsum.photos/id/310/200/300",
      genre: ["Fiction", "Historical"],
      author: "Galileo Galilei",
      publishData: "2014-03-30",
      price: 1350,
    },
    {
      name: "Chronicles of the Brave",
      image: "https://picsum.photos/id/311/200/300",
      genre: ["Fiction", "Adventure"],
      author: "Florence Nightingale",
      publishData: "2013-08-05",
      price: 1450,
    },
    {
      name: "The Final Countdown",
      image: "https://picsum.photos/id/312/200/300",
      genre: ["Fiction", "Science Fiction"],
      author: "Albert Einstein",
      publishData: "2012-06-10",
      price: 1550,
    },
    {
      name: "Shadows of the Past",
      image: "https://picsum.photos/id/313/200/300",
      genre: ["Fiction", "Mystery"],
      author: "Emily Dickinson",
      publishData: "2011-12-20",
      price: 1650,
    },
    {
      name: "Dreams of Tomorrow",
      image: "https://picsum.photos/id/314/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Benjamin Franklin",
      publishData: "2010-10-15",
      price: 1750,
    },
    {
      name: "The Lost World",
      image: "https://picsum.photos/id/315/200/300",
      genre: ["Fiction", "Adventure"],
      author: "Harriet Tubman",
      publishData: "2009-04-25",
      price: 1850,
    },
    {
      name: "Guardians of the Galaxy",
      image: "https://picsum.photos/id/316/200/300",
      genre: ["Fiction", "Science Fiction"],
      author: "George Washington",
      publishData: "2008-08-17",
      price: 1950,
    },
    {
      name: "The Hidden Truth",
      image: "https://picsum.photos/id/317/200/300",
      genre: ["Fiction", "Mystery"],
      author: "Amelia Earhart",
      publishData: "2007-02-05",
      price: 2050,
    },
    {
      name: "The Silent Hall",
      image: "https://picsum.photos/id/318/200/300",
      genre: ["Fiction", "Romance"],
      author: "Mark Twain",
      publishData: "2006-05-10",
      price: 2150,
    },
    {
      name: "Voices in the Dark",
      image: "https://picsum.photos/id/319/200/300",
      genre: ["Fiction", "Thriller"],
      author: "Louisa May Alcott",
      publishData: "2005-03-30",
      price: 2250,
    },
    {
      name: "The Enchanted Forest",
      image: "https://picsum.photos/id/320/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Edgar Allan Poe",
      publishData: "2004-09-20",
      price: 2350,
    },
    {
      name: "The Magic Within",
      image: "https://picsum.photos/id/321/200/300",
      genre: ["Fiction", "Romance"],
      author: "Emily Brontë",
      publishData: "2003-07-25",
      price: 2450,
    }, {
      name: "The Great Adventure",
      image: "https://picsum.photos/id/247/200/300",
      genre: ["Fiction"],
      author: "John Doe",
      publishData: "2021-08-21",
      price: 1500,
    },
    {
      name: "Mystery of the Old House",
      image: "https://picsum.photos/id/238/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Jane Smith",
      publishData: "2019-05-18",
      price: 1200,
    },
    {
      name: "Love in the Time of Chaos",
      image: "https://picsum.photos/id/239/200/300",
      genre: ["Romance", "Drama"],
      author: "Emily Johnson",
      publishData: "2018-02-14",
      price: 1300,
    },
    {
      name: "Journey to the Unknown",
      image: "https://picsum.photos/id/240/200/300",
      genre: ["Science Fiction", "Fantasy"],
      author: "Michael Brown",
      publishData: "2020-07-10",
      price: 1400,
    },
    {
      name: "The Last Frontier",
      image: "https://picsum.photos/id/241/200/300",
      genre: ["Historical", "Adventure"],
      author: "Chris Davis",
      publishData: "2017-11-20",
      price: 1600,
    },
    {
      name: "Tales of the Forgotten",
      image: "https://picsum.photos/id/242/200/300",
      genre: ["Fantasy", "Mystery"],
      author: "Patricia Martinez",
      publishData: "2016-09-25",
      price: 1100,
    },
    {
      name: "Whispers in the Wind",
      image: "https://picsum.photos/id/243/200/300",
      genre: ["Drama", "Romance"],
      author: "Robert Wilson",
      publishData: "2015-04-12",
      price: 1700,
    },
    {
      name: "Echoes of Eternity",
      image: "https://picsum.photos/id/244/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Linda Anderson",
      publishData: "2022-01-15",
      price: 1250,
    },
    {
      name: "Secrets of the Ancients",
      image: "https://picsum.photos/id/145/200/300",
      genre: ["Mystery", "Historical"],
      author: "Barbara Thomas",
      publishData: "2014-03-30",
      price: 1350,
    },
    {
      name: "Chronicles of the Brave",
      image: "https://picsum.photos/id/146/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "James Garcia",
      publishData: "2013-08-05",
      price: 1450,
    },
    {
      name: "The Final Countdown",
      image: "https://picsum.photos/id/247/200/300",
      genre: ["Science Fiction", "Thriller"],
      author: "Mary Robinson",
      publishData: "2012-06-10",
      price: 1550,
    },
    {
      name: "Shadows of the Past",
      image: "https://picsum.photos/id/248/200/300",
      genre: ["Mystery", "Drama"],
      author: "David Clark",
      publishData: "2011-12-20",
      price: 1650,
    },
    {
      name: "Dreams of Tomorrow",
      image: "https://picsum.photos/id/249/200/300",
      genre: ["Fantasy", "Romance"],
      author: "Susan Lewis",
      publishData: "2010-10-15",
      price: 1750,
    },
    {
      name: "The Lost World",
      image: "https://picsum.photos/id/250/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Thomas Walker",
      publishData: "2009-04-25",
      price: 1850,
    },
    {
      name: "Guardians of the Galaxy",
      image: "https://picsum.photos/id/251/200/300",
      genre: ["Science Fiction", "Fantasy"],
      author: "Margaret Hall",
      publishData: "2008-08-17",
      price: 1950,
    },
    {
      name: "The Hidden Truth",
      image: "https://picsum.photos/id/252/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Brian King",
      publishData: "2007-02-05",
      price: 2050,
    },
    {
      name: "The Silent Night",
      image: "https://picsum.photos/id/253/200/300",
      genre: ["Drama", "Romance"],
      author: "Dorothy Wright",
      publishData: "2006-05-10",
      price: 2150,
    },
    {
      name: "Voices in the Dark",
      image: "https://picsum.photos/id/254/200/300",
      genre: ["Thriller", "Mystery"],
      author: "Mark Lopez",
      publishData: "2005-03-30",
      price: 2250,
    },
    {
      name: "The Enchanted Forest",
      image: "https://picsum.photos/id/255/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Nancy Hill",
      publishData: "2004-09-20",
      price: 2350,
    },
    {
      name: "The Magic Within",
      image: "https://picsum.photos/id/256/200/300",
      genre: ["Fantasy", "Romance"],
      author: "Karen Scott",
      publishData: "2003-07-25",
      price: 2450,
    },
    {
      name: "The Dark Tower",
      image: "https://picsum.photos/id/257/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Kevin Green",
      publishData: "2002-06-15",
      price: 2550,
    },
    {
      name: "The Light of Hope",
      image: "https://picsum.photos/id/258/200/300",
      genre: ["Drama", "Romance"],
      author: "Betty Adams",
      publishData: "2001-05-25",
      price: 2650,
    },
    {
      name: "The Forbidden City",
      image: "https://picsum.photos/id/259/200/300",
      genre: ["Historical", "Adventure"],
      author: "Sharon Baker",
      publishData: "2000-12-10",
      price: 2750,
    },
    {
      name: "The Phantom Menace",
      image: "https://picsum.photos/id/260/200/300",
      genre: ["Science Fiction", "Thriller"],
      author: "Larry Gonzalez",
      publishData: "1999-11-20",
      price: 2850,
    },
    {
      name: "Rise of the Titans",
      image: "https://picsum.photos/id/261/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Catherine Wilson",
      publishData: "1998-09-15",
      price: 2950,
    },
    {
      name: "Fall of the Empire",
      image: "https://picsum.photos/id/162/200/300",
      genre: ["Historical", "Drama"],
      author: "Daniel Harris",
      publishData: "1997-07-10",
      price: 3050,
    },
    {
      name: "The New Dawn",
      image: "https://picsum.photos/id/263/200/300",
      genre: ["Science Fiction", "Romance"],
      author: "Jessica Clark",
      publishData: "1996-06-20",
      price: 3150,
    },
    {
      name: "The Eternal Flame",
      image: "https://picsum.photos/id/264/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Angela Lewis",
      publishData: "1995-04-25",
      price: 3250,
    },
    {
      name: "The Last Hope",
      image: "https://picsum.photos/id/265/200/300",
      genre: ["Science Fiction", "Drama"],
      author: "Sarah Robinson",
      publishData: "1994-03-10",
      price: 3350,
    },
    {
      name: "The Ancient Prophecy",
      image: "https://picsum.photos/id/266/200/300",
      genre: ["Fantasy", "Historical"],
      author: "Eric Walker",
      publishData: "1993-11-25",
      price: 3450,
    },
    {
      name: "The Mysterious Island",
      image: "https://picsum.photos/id/267/200/300",
      genre: ["Adventure", "Mystery"],
      author: "Elizabeth White",
      publishData: "1992-10-05",
      price: 3550,
    },
    {
      name: "The Secret Garden",
      image: "https://picsum.photos/id/268/200/300",
      genre: ["Drama", "Romance"],
      author: "Steven Harris",
      publishData: "1991-09-15",
      price: 3650,
    },
    {
      name: "The Haunted Castle",
      image: "https://picsum.photos/id/269/200/300",
      genre: ["Horror", "Mystery"],
      author: "Kimberly Martin",
      publishData: "1990-08-25",
      price: 3750,
    },
    {
      name: "The Vanishing Point",
      image: "https://picsum.photos/id/270/200/300",
      genre: ["Science Fiction", "Thriller"],
      author: "Jason Lee",
      publishData: "1989-07-05",
      price: 3850,
    },
    {
      name: "The Golden Compass",
      image: "https://picsum.photos/id/271/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Rebecca Young",
      publishData: "1988-06-15",
      price: 3950,
    },
    {
      name: "The Silver Lining",
      image: "https://picsum.photos/id/272/200/300",
      genre: ["Romance", "Drama"],
      author: "Edward Allen",
      publishData: "1987-05-25",
      price: 4050,
    },
    {
      name: "The Red Planet",
      image: "https://picsum.photos/id/273/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Melissa Wright",
      publishData: "1986-04-10",
      price: 4150,
    },
    {
      name: "The Blue Lagoon",
      image: "https://picsum.photos/id/274/200/300",
      genre: ["Romance", "Adventure"],
      author: "Jeffrey Green",
      publishData: "1985-03-20",
      price: 4250,
    },
    {
      name: "The Green Mile",
      image: "https://picsum.photos/id/275/200/300",
      genre: ["Drama", "Mystery"],
      author: "Laura Adams",
      publishData: "1984-02-05",
      price: 4350,
    },
    {
      name: "The Yellow Brick Road",
      image: "https://picsum.photos/id/276/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Henry Baker",
      publishData: "1983-01-15",
      price: 4450,
    },
    {
      name: "The Purple Heart",
      image: "https://picsum.photos/id/277/200/300",
      genre: ["Romance", "Drama"],
      author: "Donna Campbell",
      publishData: "1982-12-25",
      price: 4550,
    },
    {
      name: "The Black Pearl",
      image: "https://picsum.photos/id/278/200/300",
      genre: ["Adventure", "Mystery"],
      author: "Anthony Turner",
      publishData: "1981-11-10",
      price: 4650,
    },
    {
      name: "The White Rose",
      image: "https://picsum.photos/id/279/200/300",
      genre: ["Romance", "Drama"],
      author: "Cynthia Parker",
      publishData: "1980-10-20",
      price: 4750,
    },
    {
      name: "The Grey Wolf",
      image: "https://picsum.photos/id/280/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Rachel Evans",
      publishData: "1979-09-05",
      price: 4850,
    },
    {
      name: "The Scarlet Letter",
      image: "https://picsum.photos/id/281/200/300",
      genre: ["Historical", "Drama"],
      author: "Margaret Roberts",
      publishData: "1978-08-15",
      price: 4950,
    },
    {
      name: "The Crimson Tide",
      image: "https://picsum.photos/id/282/200/300",
      genre: ["Thriller", "Mystery"],
      author: "Robert Lewis",
      publishData: "1977-07-25",
      price: 5050,
    },
    {
      name: "The Amber Spyglass",
      image: "https://picsum.photos/id/283/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "James Clark",
      publishData: "1976-06-05",
      price: 5150,
    },
    {
      name: "The Indigo Prophecy",
      image: "https://picsum.photos/id/284/200/300",
      genre: ["Science Fiction", "Mystery"],
      author: "Mary Lewis",
      publishData: "1975-05-15",
      price: 5250,
    },
    {
      name: "The Sapphire Sky",
      image: "https://picsum.photos/id/285/200/300",
      genre: ["Romance", "Adventure"],
      author: "David Wilson",
      publishData: "1974-04-25",
      price: 5350,
    },
    {
      name: "The Emerald Isle",
      image: "https://picsum.photos/id/286/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Patricia Miller",
      publishData: "1973-03-05",
      price: 5450,
    },
    {
      name: "The Ruby Ring",
      image: "https://picsum.photos/id/287/200/300",
      genre: ["Mystery", "Drama"],
      author: "Charles Davis",
      publishData: "1972-02-15",
      price: 5550,
    },
    {
      name: "The Diamond Throne",
      image: "https://picsum.photos/id/288/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Jennifer Harris",
      publishData: "1971-01-25",
      price: 5650,
    },
    {
      name: "The Pearl Necklace",
      image: "https://picsum.photos/id/289/200/300",
      genre: ["Romance", "Drama"],
      author: "Christopher Martinez",
      publishData: "1970-12-05",
      price: 5750,
    },
    {
      name: "The Opal Crown",
      image: "https://picsum.photos/id/290/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Amanda Anderson",
      publishData: "1969-11-15",
      price: 5850,
    },
    {
      name: "The Topaz Tower",
      image: "https://picsum.photos/id/291/200/300",
      genre: ["Mystery", "Thriller"],
      author: "Joshua Brown",
      publishData: "1968-10-25",
      price: 5950,
    },
    {
      name: "The Jade Emperor",
      image: "https://picsum.photos/id/292/200/300",
      genre: ["Fantasy", "Historical"],
      author: "Sandra Miller",
      publishData: "1967-09-05",
      price: 6050,
    },
    {
      name: "The Turquoise Sea",
      image: "https://picsum.photos/id/293/200/300",
      genre: ["Adventure", "Romance"],
      author: "Edward Garcia",
      publishData: "1966-08-15",
      price: 6150,
    },
    {
      name: "The Coral Reef",
      image: "https://picsum.photos/id/294/200/300",
      genre: ["Adventure", "Mystery"],
      author: "Elizabeth Martinez",
      publishData: "1965-07-25",
      price: 6250,
    },
    {
      name: "The Quartz Mountain",
      image: "https://picsum.photos/id/295/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Steven Robinson",
      publishData: "1964-06-05",
      price: 6350,
    },
    {
      name: "The Onyx Path",
      image: "https://picsum.photos/id/296/200/300",
      genre: ["Science Fiction", "Thriller"],
      author: "Kimberly Young",
      publishData: "1963-05-15",
      price: 6450,
    },
    {
      name: "The Amethyst Forest",
      image: "https://picsum.photos/id/297/200/300",
      genre: ["Fantasy", "Romance"],
      author: "Jason Scott",
      publishData: "1962-04-25",
      price: 6550,
    },
    {
      name: "The Garnet Gate",
      image: "https://picsum.photos/id/298/200/300",
      genre: ["Mystery", "Historical"],
      author: "Nancy Lopez",
      publishData: "1961-03-05",
      price: 6650,
    },
    {
      name: "The Peridot Palace",
      image: "https://picsum.photos/id/299/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Robert White",
      publishData: "1960-02-15",
      price: 6750,
    },
    {
      name: "The Aquamarine River",
      image: "https://picsum.photos/id/300/200/300",
      genre: ["Adventure", "Romance"],
      author: "Linda Thompson",
      publishData: "1959-01-25",
      price: 6850,
    },
    {
      name: "The Zircon Desert",
      image: "https://picsum.photos/id/301/200/300",
      genre: ["Fantasy", "Adventure"],
      author: "Barbara Gonzalez",
      publishData: "1958-12-05",
      price: 6950,
    }
  ];

  public readonly onAddBook: Subject<Book> = new Subject();
  public readonly onDeleteBook: Subject<Book> = new Subject();
  public readonly onUpdateBook: Subject<Book> = new Subject();
  private searchResultsSubject = new BehaviorSubject<searchType>({
    query: '',
    results: []
  });
  searchResults$ = this.searchResultsSubject.asObservable();

  updateSearchResults(results: Book[], query: string): void {
    const param : searchType = {query, results}
    this.searchResultsSubject.next(param);
  }

  constructor() {
  }

  public findBookByName(name: string) {
    return this.books.find(b => b.name.toLowerCase() === name);
  }

  public getBooksByGenre() {
    const groupedBooks: { [genre: string]: Book[] } = this.books.reduce((acc: {
      [genre: string]: Book[]
    }, book: Book) => {
      book.genre.forEach((genre: string) => {
        if (!acc[genre]) {
          acc[genre] = [];
        }
        acc[genre].push(book);
      });
      return acc;
    }, {});

    return Object.keys(groupedBooks).map(genre => ({
      genreName: genre,
      booksList: groupedBooks[genre]
    }));
  }

  public addBook(newBook: Book) {
    if (this.books.findIndex(book => book.name === newBook.name) === -1) {
      this.books.push(newBook);
      this.onAddBook.next(newBook);
    }
  }

  public deleteBook(newBook: string) {
    const index = this.books.findIndex(book => book.name.toLowerCase() === newBook.replaceAll('-', ' '));
    const book = this.books[index];
    if (index !== -1) {
      this.books.splice(index, 1);
      this.onDeleteBook.next(book);
    }
  }

  public updateBook(oldBook: Book, newBook: Book) {
    const index = this.books.findIndex(book => book.name === oldBook.name);
    if (index !== -1) {
      this.books[index] = newBook;
      this.onUpdateBook.next(newBook);
    }
  }

  public search(query: string, genre: string = ''): Observable<Book[]> {
    if (!query.trim())
      return of([]);

    if (genre == '')
      return of(this.books.filter(item => item.name.toLowerCase().includes(query.toLowerCase())));
    else
      return of(this.books
        .filter(item => item.name.toLowerCase().includes(query.toLowerCase())
          && item.genre.join(' ').toLowerCase().includes(genre.toLowerCase())));
  }
}
