import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() bookItem
}
