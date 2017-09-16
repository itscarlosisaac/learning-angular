import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Loading custom components
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component'

// Loading event component
import { EventComponent } from './components/event/event.component';

// Loading advocate component
import { AdvocatesComponent } from './components/advocates/advocates.component'

// Adding directives
import { FavoriteDirective } from './directives/favorite.directive'

// Adding Pipes
import { CategotyListPipe } from './pipes/category.list.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AdvocatesComponent,
    EventComponent,
    MediaItemComponent,
    FavoriteDirective,
    CategotyListPipe
  ],
  imports: [ // Bring other angular module
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ] // Use for the root module and lets angular knows the starting point of the app.

})
export class AppModule { }
