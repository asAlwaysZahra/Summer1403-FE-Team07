import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
  NgClass, NgForOf,
  NgIf,
  NgOptimizedImage,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "@angular/common";
import {Router} from "@angular/router";
import {Button} from "primeng/button";
import {DialogModule} from 'primeng/dialog';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";
import {Book} from "../../models/Book";
import {BookProviderService} from "../../services/book-provider.service";
import {SearchComponent} from "../search/search.component";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    Button,
    DialogModule,
    ReactiveFormsModule,
    NgIf,
    ToastModule,
    CalendarModule,
    InputNumberModule,
    NgTemplateOutlet,
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    NgClass,
    SearchComponent,
    NgForOf,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class NavbarComponent implements OnInit {
  visible: boolean = false;
  bookForm: FormGroup;
  submitted: boolean = false;
  searchControl = new FormControl();
  results: Book[] = [];

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.bookProviderService.search(query))
    ).subscribe(results => {
      this.bookProviderService.updateSearchResults(results);
    });
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private bookProviderService: BookProviderService
  ) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      genre: ['', Validators.required],
      author: ['', Validators.required],
      publishData: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  navigate() {
    this.router.navigate(['']).then(() => {
      return
    });
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookForm.valid) {
      const formValue = this.bookForm.value;
      formValue.publishData = this.formatDate(formValue.publishData);
      formValue.genre = formValue.genre.split(", ");
      const book: Book = formValue;
      this.bookProviderService.addBook(book);
      this.visible = false;
      this.submitted = false;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        life: 3000,
        detail: 'Form is invalid. Please fill out all required fields.'
      });
      this.submitted = false;
    }
  }

  formatDate(date: string): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
