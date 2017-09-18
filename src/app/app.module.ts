import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

// Loading custom components
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component'

// Loading event component
import { EventComponent } from './components/event/event.component';

// Loading advocate component
import { AdvocatesComponent } from './components/advocates/advocates.component'

// Loading recipe Component
import { RecipeComponent } from './components/recipe/recipe.component'

// Loading Books Component
import { BookComponent } from './components/books/book.component'
import { BooksListComponent } from './components/books/books.list.component'
//  Books form
import { BookFormComponent } from './components/books/book.form.component'

// Adding directives
import { FavoriteDirective } from './directives/favorite.directive'

// Adding Pipes
import { CategotyListPipe } from './pipes/category.list.pipe'

// Loading services
import { BookService } from './services/book.service'

// Import Routes
import { routing } from './routes/app.routing';

@NgModule({
  imports: [ // Bring other angular module
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AdvocatesComponent,
    EventComponent,
    RecipeComponent,
    BookComponent,
    BooksListComponent,
    BookFormComponent,
    MediaItemComponent,
    FavoriteDirective,
    CategotyListPipe
  ],
  providers: [
    BookService
  ],
  bootstrap: [
    AppComponent,
  ] // Use for the root module and lets angular knows the starting point of the app.

})
export class AppModule { }
