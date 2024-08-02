import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public readonly onToggle: Subject<boolean> = new Subject();
  isLight: boolean = true;

  constructor() {
  }

  public toggleTheme(newIsLight: boolean) {
    console.log(this.isLight + " dkwod");
    this.isLight = newIsLight;
    this.onToggle.next(this.isLight);
  }
}
