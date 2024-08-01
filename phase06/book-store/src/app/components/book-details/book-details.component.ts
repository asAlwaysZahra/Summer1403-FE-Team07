import {Component, OnInit} from '@angular/core';
import {BookProviderService} from "../../services/book-provider.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Book} from "../../models/Book";
import {Location, NgOptimizedImage} from "@angular/common";
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ToastModule,
    ConfirmPopupModule,
    Button,
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {

  book: Book | undefined;
  bookName: string = "";

  constructor(private bookProviderService: BookProviderService, private route: ActivatedRoute
    , private titleService: Title, private router: Router, private location: Location, private confirmationService: ConfirmationService, private messageService: MessageService) {
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

  confirm1(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
      }
    });
  }

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
      }
    });
  }
}
