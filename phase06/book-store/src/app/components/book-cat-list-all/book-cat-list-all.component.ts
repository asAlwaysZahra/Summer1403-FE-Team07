import {Component, Input, OnInit} from '@angular/core';
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {NgForOf, NgOptimizedImage, Location} from "@angular/common";
import {GenreBooks} from "../../models/GenreBooks";
import {Router, RouterLink} from "@angular/router";
import {retry} from "rxjs";
import {BookProviderService} from "../../services/book-provider.service";
import {Book} from "../../models/Book";

@Component({
  selector: 'app-book-cat-list-all',
  standalone: true,
  imports: [
    GroupByGenrePipe,
    NgForOf,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './book-cat-list-all.component.html',
  styleUrl: './book-cat-list-all.component.scss'
})
export class BookCatListAllComponent implements OnInit {
  @Input() books: GenreBooks = {genreName: '', booksList: []};
  results: Book[] = [];

  constructor(private location: Location, private router: Router, private bookProviderService: BookProviderService) {
  }

  goBack() {
    this.location.back();
  }

  goToDetails(name: string) {
    this.router.navigate(['/details', name.toLowerCase().replaceAll(' ', '-')])
      .then(() => {
        return;
      });
  }

  ngOnInit(): void {
    this.bookProviderService.searchResults$.subscribe(results => {
      this.results = results;
    });
  }
}
