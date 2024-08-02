import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {BookProviderService} from "../../services/book-provider.service";
import {NgForOf} from "@angular/common";
import {Book} from "../../models/Book";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  results: Book[] = [];

  constructor(private bookProviderService: BookProviderService) {
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.bookProviderService.search(query))
    ).subscribe(results => {
      this.results = results;
    });
  }
}
