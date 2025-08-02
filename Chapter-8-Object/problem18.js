const laptop = {
    brand: 'dell',
    model: 'Inspiron',
    price: 45000
}
for(const key in laptop){
    const value = laptop[key];
    console.log(key, value);
}