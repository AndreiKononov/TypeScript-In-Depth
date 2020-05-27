import { Category } from './enums';
import { getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ===================================================================================

// ==============================================================================================================

// 02. Types Basics

// // Task 02.01 Basic Types
//
// logFirstAvailable(getAllBooks());
//
// const jsBooks = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(jsBooks);
//
// const result = getBookAuthorByIndex(1);
// console.log(result);
//
// console.log(calcTotalPages());


// 03. Functions

// // Task 03.01. Arrow Functions
//
// const jsBooks = getBookTitlesByCategory(Category.JavaScript);
// jsBooks.forEach((title: string) => console.log(title));
//
// console.log(getBookByID(1));

// // Task 03.02. Function Type
//
// let myId: string = createCustomerID('Ann', 10);
// console.log(myId);
//
// let idGenerator: (name: string, id: number) => string =
//     (name: string, id: number) => `${id}-${name}`;
//
// idGenerator = createCustomerID;
// myId = idGenerator('Boris', 20);
// console.log(myId);

// // Task 03.03. Optional, Default and Rest Parameters
//
// createCustomer('Ann');
// createCustomer('Ann', 30);
// createCustomer('Ann', 30, 'Gomel');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// const myBooks = checkoutBooks('Ann', 1 ,2, 4);
// console.log(myBooks);

// // Task 03.04. Function Overloading
//
// const checkedOutBooks = getTitles(1, true);
// console.log(checkedOutBooks);

// // Task 03.05. Assertion Functions
//
// console.log(bookTitleTransform('Title'));
// console.log(bookTitleTransform(100));


// 04. Interfaces

// // Task 04.01. Defining an Interface
//
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     markDamage: (reason: string) => console.log(`Damage ${reason}`),
// }
// printBook(myBook);
// myBook.markDamage(`missing back cover`);

// // Task 04.02. Defining an Interface for Function Types
//
// let logDamage: Logger; //DamageLogger
// logDamage = (reason: string) => console.log(`Damage ${reason}`);
// logDamage(`missing back cover`);

// // Task 04.03. Extending Interface
//
// let favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 5
// }
//
// let favoriteLibrarian: Librarian = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     department: `Classical Literature`,
//     assistCustomer: (customName: string) => console.log(`Assist ${customName}`)
// };

// // Task 04.04. Optional Chaining
//
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// };
//
// console.log(offer?.magazine?.title);

// // Task 04.05. Keyof Operator
//
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));
// console.log(getBookProp(myBook, 'markDamage'));


// 05. Classes

// // Task 05.01. Creating and Using Classes
//
// const ref: ReferenceItem = new ReferenceItem('Some Updates', 2020);
// console.log(ref);
// ref.printItem();
//
// ref.publisher = 'Anna';
// console.log(ref.publisher);

// // Task 05.02. Extending Classes, Task 06.03. Default Export
//
// const refBook: RefBook = new RefBook('Title', 2020, 3);
// console.log(refBook);
// refBook.printItem();

// // Task 05.03. Creating Abstract Classes
// const refBook2: Encyclopedia = new Encyclopedia('Title', 2020, 3);
// console.log(refBook2);
// refBook2.printCitation();

// // Task 05.04. Interfaces for Class Types
//
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// // Task 05.05. Intersection and Union Types
//
// const personBook: PersonBook = {
//     id: 1,
//     author: 'Author',
//     name: 'Anna',
//     available: false,
//     email: 'anna@example.com',
//     category: Category.Angular,
//     title: 'Title',
//     markDamage: null,
//     pages: null,
// }


// 06. Modules and Namespaces

// // Task 06.05. Dynamic Import Expression
// const flag = false;
//
// if (flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Anna';
//             console.log(reader);
//         });
// }


// 07. Generics

// // Task 07.01. Generic Functions
//
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
//
// let result = purge<Book>(inventory);
// console.log(result);
//
// let result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// // Task 07.02. Generic Interfaces and Classes
//
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook);
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf: Shelf<Magazine> = new Shelf();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMag = magazineShelf.getFirst();
// console.log(firstMag);

// // Task 07.03. Generic Constraints
//
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// // Task 07.04. Utility Types
//
// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 100,
//     title: 'Unknown',
// }
//
// const updatedBook: UpdatedBook = {
//     id: 1,
//     title: 'Unknown',
// }
//
// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);


// 08. Decorators

// // Task 08.01. Class Decorators (sealed)
//
// const universityLibrarian = new UniversityLibrarian();
// console.log(universityLibrarian);

// // Task 08.02. Class Decorators that replace constructor functions (logger)
//
// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian['printLibrarian']();

// // Task 08.03. Method Decorator (writable)
//
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;
// fLibrarian.teachCommunity = function () {
//     console.log('111');
// };
// fLibrarian.teachCommunity();

// // Task 08.04. Method Decorator (timeout)
//
// const refBook: RefBook = new RefBook('Title', 2020, 3);
// refBook.printItem();

// // Task 08.05. Parameter Decorator (logParameter)
//
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
// console.log(fLibrarian);

// // Task 08.06. Property Decorator
//
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);
// fLibrarian.assistCustomer('Boris');

// // Task 08.07. Accessor Decorator
//
// const refBook: RefBook = new RefBook('Title', 2020, 3);
// // refBook.copies = -10;
// refBook.copies = 10;
// console.log(refBook);


// 09. Asynchronous Patterns

// // Task 09.01. Callback Functions
//
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// // Task 09.02. Promises
//
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(data => {
//         console.log(data);
//         return data.length;
//     })
//     .then(numberOfBooks => console.log(numberOfBooks))
//     .catch(console.log);
// getBooksByCategoryPromise(Category.Software)
//     .then(console.log)
//     .catch(console.log);
// console.log('End');

// // Task 09.03. Async Functions

console.log('Start');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software)
    .catch(console.log);
console.log('End');
