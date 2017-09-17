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

  eventsData = [
    {
      id: 1,
      eventName: 'Angular 4, Basic Binding',
      eventSpeaker: "Michael Dugglas",
      eventLocation: "Seattle",
      eventDate: 1394166562384,
      thumbnailUrl: "https://cdn.dribbble.com/users/4094/screenshots/1672386/027.jpg",
      eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      eventDetails: "Details"
    },
    {
      id: 2,
      eventName: 'Working With React',
      eventSpeaker: "Max Firtman",
      eventLocation: "New York, NY",
      eventDate: 1294166565384,
      thumbnailUrl: "https://cdn.dribbble.com/users/4094/screenshots/1672386/027.jpg",
      eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      eventDetails: "Details"
    },
    {
      id: 3,
      eventName: 'How To Use TypeScript',
      eventSpeaker: "Ronald Dolz",
      eventLocation: "San Francisco",
      eventDate: 1294166565384,
      thumbnailUrl: "https://cdn.dribbble.com/users/4094/screenshots/1672386/027.jpg",
      eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      eventDetails: "Details"
    }
  ]

  advocatesData = [
    {
      id: 1,
      thumbnailUrl: "url(https://cdn.dribbble.com/users/182545/screenshots/781569/dribbble.png)",
      name: 'Michael Dugglas',
      title: "Web Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      thumbnailUrl: "url(https://cdn.dribbble.com/users/182545/screenshots/781569/dribbble.png)",
      name: "Max Firtman",
      title: "Android Developer",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      id: 3,
      thumbnailUrl: "url(https://cdn.dribbble.com/users/182545/screenshots/781569/dribbble.png)",
      name: "Ronald Dolz",
      title: "Graphic Designer",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  recipeData = [
    {
      name: "Rice",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      steps: [
        "First",
        "Second",
        "Third",
        "Fourth"
      ]
    },
    {
      name: "Carrots with Bread",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      steps: [
        "First",
        "Second",
        "Third",
        "Fourth"
      ]
    },
    {
      name: "Artichokes with Bread",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      steps: [
        "First",
        "Second",
        "Third",
        "Fourth"
      ]
    }
  ]

  booksData = [
    {
      title: "El nombre del viento",
      alias: '(The Kingkiller Chronicle #1)',
      author: 'Patrick Rothfuss',
      description: "En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la auténtica historia de su vida. Una historia que únicamente él conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe... músico, mendigo, ladrón, estudiante, mago, ...more",
      pages: 126,
      genres: [ 'fantasy', 'fiction', 'epic-fantasy' ]
    },
    {
      title: "El nombre del viento",
      alias: '',
      author: 'Mary Wollstonecraft Shelley',
      description: "Mary Shelley began writing Frankenstein when she was only eighteen. At once a Gothic thriller, a passionate romance, and a cautionary tale about the dangers of science, Frankenstein tells the story of committed science student Victor Frankenstein. Obsessed with discovering the cause of generation and life and bestowing animation upon lifeless matter, Frankenstein assembles ...more",
      pages: 872,
      genres: [ 'classic', 'fiction', 'horror', 'literature', 'novel' ]
    },
  ]

  onMediaItemDelete(mediaItem){
    console.log(mediaItem)
  }
}
