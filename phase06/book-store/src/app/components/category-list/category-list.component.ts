import {Component, OnInit} from '@angular/core';
import {GroupByGenrePipe} from "../../pipes/group-by-genre.pipe";
import {NgForOf} from "@angular/common";
import {Book} from "../../models/Book";
import {BookProviderService} from "../../services/book-provider.service";
import {BookCatListAllComponent} from "../book-cat-list-all/book-cat-list-all.component";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    GroupByGenrePipe,
    NgForOf,
    BookCatListAllComponent
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit {
  books: Book[] = [];
  genreCategory: string = '';

  constructor(private bookProviderService: BookProviderService, private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit(): void {
    this.books = this.bookProviderService.loadBooks();
    this.genreCategory = this.route.snapshot.params['category'];
    this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.genreCategory.replace('-', ' '));
  }
}
