import { Category } from './enums';
import { Book, DamageLogger, Author, Librerian } from './interfaces';
import { UniversityLibrarian, Encyclopedia, ReferenceItem } from './classes';

function GetAllBooks(): Book[] {
    let books = [
        { id: 1, title: 'Ulyssess', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I knew it!', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books: any[]): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    let booksCheckedOut: string[] = [];
    for (let id of bookIDs) {
        let book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}


// FUNCTION OVERLOADING!!
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

//const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
//LogBookTitles(poetryBooks);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction)
// fictionBooks.forEach((val, idx, arr) => {
//     console.log(++idx + ' - ' + val);
// });

// CreateCustomer('Orlando');
// CreateCustomer('Orlando', 25);
// CreateCustomer('Orlando', 25, 'Nogales');

// let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// let hermansBook = GetTitles('Herman Melville');
// hermansBook.forEach(title => console.log(title));

// let checkedOutBook = GetTitles(false);
// checkedOutBook.forEach(title => console.log(title));

// let myBook = {
//     id: 5,
//     title: 'yolo swag',
//     author: 'Jane Austen',
//     available: true,
//     category: Category.Fiction,
//     year: '1813',
//     copies: 3,
//     markDamaged: (reason: string) => console.log('Damaged: ' + reason)
// };

// PrintBook(myBook);
// myBook.markDamaged('torn pages');

// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log('Damage reporte: ' + damage);
// logDamage('coffee stains');

// let favoriteLibrarian: Librerian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');

// let ref = new ReferenceItem('Updated Facts and Figures', 2012);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}


