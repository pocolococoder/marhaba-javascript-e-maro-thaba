const food = {
    name: 'Pizza',
    price : 500,
    size: 'large'
}
Object.seal(food);

//Changes value

food.price = 700;
console.log(food);