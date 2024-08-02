import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {BookProviderService} from "../../services/book-provider.service";
import {BookCatListComponent} from "../book-cat-list/book-cat-list.component";
import {Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {GenreBooks} from "../../models/GenreBooks";
import {Book} from "../../models/Book";
import {CarouselComponent} from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    GroupByGenrePipe,
    BookCatListComponent,
    AsyncPipe,
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  books: GenreBooks[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private bookProviderService: BookProviderService) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.bookProviderService.onAddBook.subscribe(value => {
        const groupedBooksMap: { [genre: string]: Book[] } = this.books.reduce((acc, group) => {
          acc[group.genreName] = group.booksList;
          return acc;
        }, {} as { [genre: string]: Book[] });

        value.genre.forEach((genre: string) => {
          if (!groupedBooksMap[genre]) {
            groupedBooksMap[genre] = [];
          }
          groupedBooksMap[genre].push(value);
        });

        this.books = Object.keys(groupedBooksMap).map(genre => ({
          genreName: genre,
          booksList: groupedBooksMap[genre]
        }));
      })
    );
    this.books = this.bookProviderService.getBooksByGenre();
  }
}
