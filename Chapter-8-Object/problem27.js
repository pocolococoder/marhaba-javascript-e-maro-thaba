const book = {
    title : "Harry Potter",
    author: 'J K Rowling',
    pages : 500
}
Object.seal(book);

book.author = "Rezwan Mahmud";
book.pages = 600;
console.log(book);