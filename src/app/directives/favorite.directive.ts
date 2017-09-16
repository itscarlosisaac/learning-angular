// Host is used to bind a host to the directive
// Host Listners using hovers
import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective {
  // is-favorite is a property on the data
  @HostBinding('class.is-favorite') isFavorite = true;

  // Exposing the class with a setter method
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }

  // Host Listener
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter(){
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }
}
