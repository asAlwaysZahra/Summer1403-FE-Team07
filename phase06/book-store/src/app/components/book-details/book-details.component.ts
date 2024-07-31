import {Component, OnInit} from '@angular/core';
import {BookProviderService} from "../../services/book-provider.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Book} from "../../models/Book";
import {Location, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {

  book: Book | undefined;
  bookName: string = "";

  constructor(private bookProviderService: BookProviderService, private route: ActivatedRoute
    , private titleService: Title, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.bookName = this.route.snapshot.params['name'].replaceAll('-', ' ');
    this.book = this.bookProviderService.findBookByName(this.bookName);
    this.titleService.setTitle(this.bookName);

    if (!this.book) {
      this.router.navigate([''])
        .then(() => {
          return;
        });
    }
  }

  goBack() {
    this.location.back();
  }
}
