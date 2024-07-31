import {Component} from '@angular/core';
import {RouterOutlet, RouterModule} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-store';

  constructor(private readonly primeNGConfig: PrimeNGConfig) {
    primeNGConfig.ripple = true
  }
}
