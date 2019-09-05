class Library {
    constructor() {
        this.bookList = [];
    }
    shelve(book) {
        this.bookList.push(book);
        return this;
    }
    findByTitle(name) {
        for (const item of this.bookList) {
            if (item.title === name) {
                return item;
            }
        }
    }
    list() {
        return this.bookList;
    }
}
class Book {
    constructor(title, authors, edition) {
        this.title = title;
        this.authors = authors;
        this.edition = edition;
    }
}
// Here are a few examples of books being constructed
const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
    "The Rust Programming Language",
    ["Steve Klabnik", "Carol Nichols"],
    2
);
const lib = new Library();
lib.shelve(eloquentJS);

// See if you can make it possible to chain shelve calls
lib.shelve(speakingJS).shelve(theRustProgLang);
console.log(lib.list());
// [
//   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},
//   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},
//   Book {title: "Speaking JavaScript", authors: Array(1), edition: 1},
// ]