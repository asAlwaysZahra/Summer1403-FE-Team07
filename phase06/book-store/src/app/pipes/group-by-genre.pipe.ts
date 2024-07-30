import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/Book';

interface GroupedBooks {
  [genre: string]: Book[];
}

@Pipe({
  standalone: true,
  name: 'groupByGenre'
})
export class GroupByGenrePipe implements PipeTransform {

  transform(books: Book[]): { genre: string, books: Book[] }[] {
    if (!books) {
      return [];
    }

    const groupedBooks: GroupedBooks = books.reduce((acc: GroupedBooks, book: Book) => {
      book.genre.forEach((genre: string) => {
        if (!acc[genre]) {
          acc[genre] = [];
        }
        acc[genre].push(book);
      });
      return acc;
    }, {});

    return Object.keys(groupedBooks).map(genre => ({
      genre,
      books: groupedBooks[genre]
    }));
  }
}
