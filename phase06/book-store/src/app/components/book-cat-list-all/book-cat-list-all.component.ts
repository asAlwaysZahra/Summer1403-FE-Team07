import {Component, Input} from '@angular/core';
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {NgForOf, NgOptimizedImage, Location} from "@angular/common";
import {GenreBooks} from "../../models/GenreBooks";
import {Router, RouterLink} from "@angular/router";
import {retry} from "rxjs";

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
export class BookCatListAllComponent {
  @Input() books: GenreBooks = {genreName: '', booksList: []};

  constructor(private location: Location, private router: Router) {
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
}
