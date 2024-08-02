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
      debounceTime(300), // wait for the user to stop typing for 300ms
      distinctUntilChanged(), // only emit if the value has changed
      switchMap(query => this.bookProviderService.search(query)) // switch to new search observable
    ).subscribe(results => {
      this.results = results;
    });
  }
}
