class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read () {
        return `Estou lendo ${this.title}`
    }
}

// let book = new Book('Algoritmos para viver', 'Brian', 500);
// let otherBook = new Book ('Um Exu em Nova York', 'Cidinha da Silva', 100);
// //console.log(book);
// //console.log(book.read());
// //console.log(otherBook)
// //console.log(otherBook.read());

class ITbook extends Book {
    constructor (title, author, pages, technology) {
        super (title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITbook ('Algoritmos para viver', 'Brian', 500, 'Algoritmos');
console.log(itBook);