import { Pipe } from '@angular/core';

@Pipe({
  name: 'categoryList' // Name for the pipe
  // pure: true //means will take data and return the same data without modifications
})

export class CategotyListPipe {
  // Is the main method of the pipe class, if has params will pass those after the first arg.
  transform(mediaItems){
    var cats = [];

    mediaItems.forEach(mediaItem => {
      if( cats.indexOf(mediaItem.category) <= -1 ){
        cats.push(mediaItem.category)
      }
    });
    return cats.join(', ') ;
  }
}
