import { Book, DamageLogger, Author, Librerian } from './interfaces';

class UniversityLibrarian implements Librerian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

export { UniversityLibrarian };
