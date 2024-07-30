import {Component, OnInit} from '@angular/core';
import {BookProviderService} from "../../services/book-provider.service";
import {Book} from "../../models/Book";
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-book-cat-list',
  standalone: true,
  imports: [
    GroupByGenrePipe,
    NgForOf
  ],
  templateUrl: './book-cat-list.component.html',
  styleUrl: './book-cat-list.component.scss',
})
export class BookCatListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookProviderService: BookProviderService) {
  }

  ngOnInit(): void {
    this.books = this.bookProviderService.loadBooks();
  }
}
