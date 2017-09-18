import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BookFormComponent } from '../components/books/book.form.component'
import { BookComponent } from '../components/books/book.component'
import { BooksListComponent } from '../components/books/books.list.component'

const appRoutes: Routes = [
  { path: 'add', component: BookFormComponent },
  { path: ':type', component: BooksListComponent }, // Using params :type
  { path : '', pathMatch: 'full', redirectTo: 'all' } // Default route
];


export const routing = RouterModule.forRoot(appRoutes); // Setting the routs
