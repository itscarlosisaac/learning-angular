import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  showDetails = false;
  @Input() bookItem

  onToggleDetails(){
    this.showDetails = !this.showDetails;
  }
}
