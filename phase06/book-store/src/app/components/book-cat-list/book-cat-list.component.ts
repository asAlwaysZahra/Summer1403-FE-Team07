import {Component, Input} from '@angular/core';
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {GenreBooks} from "../../models/GenreBook";

@Component({
  selector: 'app-book-cat-list',
  standalone: true,
  imports: [
    GroupByGenrePipe,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './book-cat-list.component.html',
  styleUrl: './book-cat-list.component.scss',
})

export class BookCatListComponent {
  @Input() books: GenreBooks = { genreName: '', booksList: [] };
}
