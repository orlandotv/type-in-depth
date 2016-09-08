import { Book, DamageLogger, Author, Librerian } from './interfaces';

class UniversityLibrarian implements Librerian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {
    private _publisher: string;
    static department: string  = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new RefrerenceItem...');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department:  ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {

    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
// class Jorunal extends ReferenceItem {
//     constructor() {
//         super();
//     }
//     contributors: string[];
// }

export { UniversityLibrarian, Encyclopedia, ReferenceItem };


// interface Juice {
//     squizz:() => void;
// }

// let OrangeJuice: Juice = {
//     squizz(): void {
//         console.log('Orange Juice');
//     }
// }

// class OranJuiceClass implements Juice {
//     squizz(): void {
//         console.log('Abstract Juice');
//     }
// }

// abstract class AWQSJuice {
//     squizzDouble: () => void;
// }
