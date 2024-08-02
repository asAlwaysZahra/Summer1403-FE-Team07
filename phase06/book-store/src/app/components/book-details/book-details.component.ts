import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BookProviderService} from "../../services/book-provider.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Book} from "../../models/Book";
import {Location, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ToastModule,
    ConfirmPopupModule,
    Button,
    FormsModule,
    CalendarModule,
    DialogModule,
    InputNumberModule,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class BookDetailsComponent implements OnInit {
  book: Book | undefined;
  bookName: string = "";
  public isLiked: boolean = false;
  visible: boolean = false;
  bookForm: FormGroup;
  submitted: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private bookProviderService: BookProviderService, private route: ActivatedRoute,
              private titleService: Title, private router: Router, private location: Location,
              private confirmationService: ConfirmationService, private messageService: MessageService,
              private fb: FormBuilder,) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      genre: ['', Validators.required],
      author: ['', Validators.required],
      publishData: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.bookProviderService.onUpdateBook.subscribe(value => {
        this.book = value;
        this.bookName = value.name.toLowerCase().replaceAll(' ', '-');
        this.router.navigate(['/details', this.bookName]).then(() => {
          this.titleService.setTitle(value.name.toLowerCase());
        });
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Book is successfully updated', life: 3000 });
      })
    );
    this.bookName = this.route.snapshot.params['name'].replaceAll('-', ' ');
    this.book = this.bookProviderService.findBookByName(this.bookName);
    this.titleService.setTitle(this.bookName);

    if (!this.book) {
      this.router.navigate([''])
        .then(() => {
          return;
        });
    } else {
      this.bookForm = this.fb.group({
        name: [this.book.name, Validators.required],
        image: [this.book.image, Validators.required],
        genre: [this.book.genre, Validators.required],
        author: [this.book.author, Validators.required],
        publishData: [new Date(this.book.publishData), Validators.required],
        price: [this.book.price, [Validators.required, Validators.min(1)]]
      });
    }
  }

  goBack() {
    this.location.back();
  }

  deleteConfirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Book is successfully deleted', life: 3000 });
        this.router.navigate(['']).then(() => {
          return
        });
        this.bookProviderService.deleteBook(this.bookName)
      },
      reject: () => {
        return;
      }
    });
  }

  onClickFavorite() {
    this.isLiked = !this.isLiked;
  }

  showDialog() {
    this.visible = true;
  }

  onSubmitEdit() {
    this.submitted = true;

    if (this.bookForm.valid) {
      const formValue = this.bookForm.value;
      formValue.publishData = this.formatDate(formValue.publishData);

      if (typeof formValue.genre === 'string') {
        formValue.genre = formValue.genre.split(", ");
      }

      const newBook: Book = formValue;

      if (this.book) {
        this.bookProviderService.updateBook(this.book, newBook);
        this.visible = false;
        this.submitted = false;
      }

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
