import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import {CategoryListComponent} from "./components/category-list/category-list.component";

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: HomeComponent,
    title: "Home page"
  },
  {
    path: 'genre/:category',
    component: CategoryListComponent,
    title: "Genre"
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

export default routeConfig;
