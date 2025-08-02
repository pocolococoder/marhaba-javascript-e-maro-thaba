const books = {
    book1: "harry potter",
    book2: 'The hobbit',
    book3: 'game of thrones'
};
for(const key in books){
    const value = books[key];
    console.log(value);
}