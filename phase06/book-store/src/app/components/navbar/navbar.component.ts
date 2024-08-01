import {Component, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {Button} from "primeng/button";
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    Button,
    DialogModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  visible: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  navigate() {
    this.router.navigate([''])
      .then(() => {
        return;
      });
  }

  showDialog() {
    this.visible = true;
  }
}
