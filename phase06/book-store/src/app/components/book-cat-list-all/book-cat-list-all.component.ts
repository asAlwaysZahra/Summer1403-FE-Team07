import {Component, Input} from '@angular/core';
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {GenreBooks} from "../../models/GenreBook";

@Component({
  selector: 'app-book-cat-list-all',
  standalone: true,
  imports: [
    GroupByGenrePipe,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './book-cat-list-all.component.html',
  styleUrl: './book-cat-list-all.component.scss'
})
export class BookCatListAllComponent {
  @Input() books: GenreBooks = { genreName: '', booksList: [] };
}
