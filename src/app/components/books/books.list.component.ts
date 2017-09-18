import { Component } from '@angular/core'

import { BookService } from '../../services/book.service'

@Component({
  selector: 'books-list-component',
  templateUrl: './books.list.component.html',
  styleUrls: ['./books.list.component.css']
})

export class BooksListComponent {
  booksData;
  constructor( private bookService: BookService ){}

  ngOnInit(){
    this.booksData = this.bookService.get();
  }

  onBookDelete(book){
    this.booksData.delete(book)
  }
}
