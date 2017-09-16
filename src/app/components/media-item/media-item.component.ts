
// Input = Input decorator
// Output decorator to allow to expose event binding in components
// Structural directives ngIf , ngFor, ngSwitch

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent {
  name = 'The redemtion';

  wasWatched(){
    return true;
  };


  // Binding events to the dom elements
  onDelete(){
    console.log("deleting")
  }

  onWatch(){
    console.log('Watching movie')
  }


  // Binding properties placed on the instances of this component
  @Input() mediaItem

  // Output decorator works with event emitter
  @Output() delete = new EventEmitter();
  emitDelete(){
    // Can be called with data to send back
    this.delete.emit(this.mediaItem);
  }
}
