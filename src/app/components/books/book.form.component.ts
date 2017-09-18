import { Component } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'

import { BookService } from '../../services/book.service'

@Component({
  selector: 'book-form-component',
  templateUrl: './book.form.component.html',
  styleUrls: ['./book.form.component.css']
})

export class BookFormComponent{
  form;

  // This part is typescript to leaverage their variable type
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      author: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control(''),
      pages: this.formBuilder.control(''),
      genres: this.formBuilder.control(''),
      type: this.formBuilder.control('short'),
    });
  }

  onSubmit(book){
    // console.log(book)
    this.bookService.add(book)
  }
}
