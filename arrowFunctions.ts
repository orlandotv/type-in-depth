let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I knew it!', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
];

books.forEach(() => console.log('Done readingg!'));
books.forEach(title => console.log(title));
books.forEach((title, idx, arr) => console.log(idx + '- ' + title));