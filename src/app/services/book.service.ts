
export class BookService {
  get() {
    return this.booksData;
  }

  add(book) {
    book.genres = book.genres.split(' ');
    this.booksData.push(book);
  }

  delete(book){
    let index = this.booksData.indexOf(book)
    if( index >= 0 ){
      this.booksData.splice(index, 1);
    }
  }

  booksData = [
    {
      title: "El nombre del viento",
      alias: '(The Kingkiller Chronicle #1)',
      author: 'Patrick Rothfuss',
      description: "En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la auténtica historia de su vida. Una historia que únicamente él conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe... músico, mendigo, ladrón, estudiante, mago, ...more",
      pages: 126,
      genres: [ 'fantasy', 'fiction', 'epic-fantasy' ],
      type: 'long'
    },
    {
      title: "Frankenstein",
      alias: '',
      author: 'Mary Wollstonecraft Shelley',
      description: "Mary Shelley began writing Frankenstein when she was only eighteen. At once a Gothic thriller, a passionate romance, and a cautionary tale about the dangers of science, Frankenstein tells the story of committed science student Victor Frankenstein. Obsessed with discovering the cause of generation and life and bestowing animation upon lifeless matter, Frankenstein assembles ...more",
      pages: 872,
      genres: [ 'classic', 'fiction', 'horror', 'literature', 'novel' ],
      type: 'short'
    }
  ];
}
