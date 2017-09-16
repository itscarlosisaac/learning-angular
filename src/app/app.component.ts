import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Can be multiple items
})

export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: "Firebut",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: true
  };

  mediaItems = [
    {
      id: 1,
      name: "Firebut",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "Second Movie",
      medium: "Movies",
      category: "Drama",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    },
    {
      id: 2,
      name: "Third Movie",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }
  ]


  onMediaItemDelete(mediaItem){
    console.log(mediaItem)
  }
}
