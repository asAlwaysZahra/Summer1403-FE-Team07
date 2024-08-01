import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {NgForOf} from "@angular/common";
import {Book} from "../../models/Book";
import {BookProviderService} from "../../services/book-provider.service";
import {BookCatListComponent} from "../book-cat-list/book-cat-list.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    GroupByGenrePipe,
    NgForOf,
    BookCatListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  books: Book[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private bookProviderService: BookProviderService) {
  }

  ngOnInit(): void {
    this.books = this.bookProviderService.loadBooks();

    this.subscription.add(
      this.bookProviderService.onAddBook.subscribe(value => {
        this.books.push(value);
        console.log('New value received category :', value);
      })
    );
  }
}
